import Phaser from 'phaser'

const formatScore = (score:number) => `Score: ${score}`

export default class ScoreLabel extends Phaser.GameObjects.Text
{
    score: number = undefined;

    constructor(scene: Phaser.Scene, x:number, y:number, score:number, style:{fontSize: string, fill: string}) {
        super(scene, x, y, formatScore(score), style)
        this.score = score;
    }

    setScore(score: number) {
        this.score = score;
        this.upadateScoreText();
    }

    add(points: number){
        this.setScore(this.score + points)
    }

    upadateScoreText(){
        this.setText(formatScore(this.score))
    }
}