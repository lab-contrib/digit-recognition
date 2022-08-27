import { Component, mountComponent } from 'nefbl'
import image2D from 'image2d'
import { image2D_Object } from 'image2d/types/image2D'
import { painter } from 'image2d/types/painter'

import Matrix from 'arith-js/matrix.js'
import sigmoid from 'arith-js/sigmoid.js'

import weight_init from './weights'
import weight_calc from './weights.json'
let _weight1 = weight_calc.weight1
let _weight2 = weight_calc.weight2
let _weight3 = weight_calc.weight3

import seedData from './seed.json'
let _seedData = JSON.parse(sessionStorage.getItem('digit-recognition@seed-data')) || seedData

import lazyLoad from '../dialogs/lazy-load.js'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    image2d: image2D_Object
    painter: painter

    isDown: boolean = false

    $mounted() {

        // 初始化画布
        this.image2d = image2D('canvas')
        this.painter = this.image2d.painter()

        // 配置画笔
        this.painter.config({

            strokeStyle: "#ff0000",

            // 训练样本确定以后，这个值不要轻易改动了
            lineWidth: 10
        })


        // setTimeout(() => {
        //     for (let i = 0; i < 10000; i++) {
        //         console.log(i)
        //         for (let j = 0; j < _seedData.length; j++) {
        //             this.trainSeed(_seedData[j].output, _seedData[j].input)
        //         }
        //     }
        document.getElementById('seed-msg').style.display = 'none'
        // })


    }

    // 获取画布上的像素信息
    getInput() {
        let seedJson = [], oralPainter = this.image2d[0].getContext("2d")
        for (let row = 0; row < 28; row++) {
            for (let col = 0; col < 28; col++) {
                seedJson.push(oralPainter.getImageData(col * 20 + 10, row * 20 + 10, 1, 1).data[0] > 100 ? 1 : 0)
            }
        }
        this.seedImage(seedJson)
        return seedJson
    }

    // 训练程序
    doTrain() {
        let _this = this
        this.openDialog('selectNum').then((target: any) => {
            target.component.init({
                callback: function (num: number) {
                    target.el.parentNode.removeChild(target.el)
                    let output = [
                        num == 0 ? 1 : 0,
                        num == 1 ? 1 : 0,
                        num == 2 ? 1 : 0,
                        num == 3 ? 1 : 0,
                        num == 4 ? 1 : 0,
                        num == 5 ? 1 : 0,
                        num == 6 ? 1 : 0,
                        num == 7 ? 1 : 0,
                        num == 8 ? 1 : 0,
                        num == 9 ? 1 : 0
                    ]
                    let input = _this.getInput()
                    for (let index = 0; index < 100; index++) {
                        _this.trainSeed(output, input)
                    }

                    _seedData.push({
                        output, input
                    })

                    sessionStorage.setItem('digit-recognition@seed-data', JSON.stringify(_seedData))
                }
            })
        })
    }

    // 下载权重
    downloadWeightData() {
        let _weight = {
            weight1: _weight1,
            weight2: _weight2,
            weight3: _weight3
        }
        let Link = document.createElement("a")
        Link.download = "weights.json"
        Link.style.display = "none"
        let blob = new Blob([JSON.stringify(_weight)])
        Link.href = URL.createObjectURL(blob)
        document.body.appendChild(Link)
        Link.click()
        document.body.removeChild(Link)
    }

    // 下载种子
    downloadSeedData() {
        let seedData = sessionStorage.getItem('digit-recognition@seed-data')
        if (seedData) {
            let Link = document.createElement("a")
            Link.download = "seed.json"
            Link.style.display = "none"
            let blob = new Blob([seedData])
            Link.href = URL.createObjectURL(blob)
            document.body.appendChild(Link)
            Link.click()
            document.body.removeChild(Link)
        } else {
            alert('种子已经是最新的了，无需下载更新！')
        }
    }

    // 训练
    trainSeed(output: Array<number>, input?: Array<number>) {

        // 先求解出每一层的值
        let { input1, input2, input3, input4 } = this.calcInput(input)

        // 嗅探第3层
        let error3 = Matrix([output]).minus(input4).value()[0]
        let delta3 = Matrix([error3]).dot(input4).dot(Matrix([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]).minus(input4)).value()[0]

        // 嗅探第2层
        let error2 = Matrix([delta3]).multiply(Matrix(_weight3).T()).value()[0]
        let delta2 = Matrix([error2]).dot(input3).dot(Matrix([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]).minus(input3)).value()[0]

        // 嗅探第1层
        let error1 = Matrix([delta2]).multiply(Matrix(_weight2).T()).value()[0]
        let delta1 = Matrix([error1]).dot(input2).dot(Matrix([[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]]).minus(input2)).value()[0]

        // 调整第3层
        _weight3 = Matrix(input3).T().multiply([delta3]).add(_weight3).value()

        // 调整第2层
        _weight2 = Matrix(input2).T().multiply([delta2]).add(_weight2).value()

        // 调整第1层
        _weight1 = Matrix(input1).T().multiply([delta1]).add(_weight1).value()
    }

    // 识别程序
    doRun() {
        let input4 = this.calcInput().input4

        let result = 0, value = input4[0][0]
        for (let index = 1; index < 9; index++) {
            if (input4[0][index] > value) {
                value = input4[0][index]
                result = index
            }
        }
        alert('你写的数字是：' + result)
    }

    // 求解
    calcInput(input?: Array<number>) {

        // 获取0层输入值
        let input1 = input || this.getInput()

        // 计算第1层
        let input2 = sigmoid(Matrix([input1]).multiply(_weight1).value())

        // 计算第2层
        let input3 = sigmoid(Matrix(input2).multiply(_weight2).value())

        // 计算第3层
        let input4 = sigmoid(Matrix(input3).multiply(_weight3).value())

        return {
            input1: [input1], input2, input3, input4
        }
    }

    // 种子可视化打印
    seedImage(seed: Array<number>) {
        let imageStr = ""
        for (let index = 0; index < seed.length; index++) {
            if (index % 28 == 0) {
                imageStr += "\n"
            }
            imageStr += (seed[index] == 1 ? "  " : " 0")
        }
        console.log(imageStr)
    }

    // 清空画布
    doClear() {
        this.painter.clearRect()
    }

    // 鼠标按下
    doMouseDown() {
        this.isDown = true
        this.painter.beginPath()
    }

    // 鼠标移动
    doMouseMove(event: MouseEvent) {
        if (this.isDown) {
            this.painter.lineTo(event.offsetX, event.offsetY).stroke()
        }
    }

    // 鼠标放开
    doMouseUp() {
        this.isDown = false
    }

    // 打开弹框
    openDialog(dialogName: string) {
        return new Promise((resolve) => {
            lazyLoad[dialogName]().then(((data: any) => {
                let li = document.createElement('li')
                document.getElementById('dialog').appendChild(li)
                resolve({
                    component: mountComponent(li, data.default, this['_module']),
                    el: li
                })
            }))
        })
    }

}
