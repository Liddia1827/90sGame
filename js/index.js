const config = {

    type: Phaser.AUTO,
    width: w,
    height: h,
    parent: 'app',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 700
            }
        },
    },




    scene: [gameStart, gamePlay]

}
const game = new Phaser.Game(config);























// const config = {
//     type: Phaser.AUTO,
//     width: cw,
//     height: ch,
//     parent: 'app',
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: {
//                 y: 850
//             },
//             // debug: true,
//         },
//     },
//     scene: [
//         gameStart,
//         gamePlay,
//     ]
// }

// const game = new Phaser.Game(config);