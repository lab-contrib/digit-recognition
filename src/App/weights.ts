
/**
 * 初始化权重
 */

// 第一层
let weight1 = []
for (let row = 0; row < 784; row++) {
    weight1[row] = []
    for (let col = 0; col < 16; col++) {
        weight1[row][col] = Math.random() * 2 - 1
    }
}

// 第二层
let weight2 = []
for (let row = 0; row < 16; row++) {
    weight2[row] = []
    for (let col = 0; col < 16; col++) {
        weight2[row][col] = Math.random() * 2 - 1
    }
}

// 第三层
let weight3 = []
for (let row = 0; row < 16; row++) {
    weight3[row] = []
    for (let col = 0; col < 10; col++) {
        weight3[row][col] = Math.random() * 2 - 1
    }
}

// 导出
export default {
    weight1,
    weight2,
    weight3
}