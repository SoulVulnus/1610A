const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor(element, colors) {
        this.element = element
        this.colors = colors;
        this.texts = this.element.value;
        // console.log(this.element, this.colors)
        this.classStyle()
        this.staticBtn()
        this.moveBtn()
    }
    classStyle() {
        this.div = document.createElement("div");
        this.div.style.width = "30px";
        this.div.style.height = (50 + this.texts * 10) + "px";
        // this.div.style.height = "50px"
        this.div.innerHTML = this.texts;

    }
    staticBtn() {
        staticBtn.onclick = () => {

            console.log(this.texts)
            this.div.style.background = this.colors;
            oBox.appendChild(this.div)
        }
    }
    moveBtn() {
        moveBtn.onclick = () => {
            this.div.classList.add("jump")
            oBox.appendChild(this.div)
        }
    }
    allBtn() {
        allBtn.onclick = () => {

        }
    }

}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(element, colors) {
        super(element, colors)
    }
}

new StaticNumBlock(numInput, "red")


new MoveNumBlock(numInput, "rgb(250, 153, 153)")