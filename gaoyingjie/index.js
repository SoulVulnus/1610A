const oBox = document.getElementById('box');
//console.log(oBox)
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
const val = numInput.value;

class StaticNumBlock { // 静态数柱的类
    constructor(obj) {
            // this.parent = parent;
            // //console.log(this.parent)
            // this.staticBtn = obj.staticBtn;
            // //console.log(this.staticBtn)
            // this.moveBtn = obj.moveBtn;
            // //console.log(this.moveBtn)
            this.obj = obj;
            //console.log(this.obj)
            this.staticBtnclick()
            this.moveBtnclick()
            this.allBtnclick()
        }
        //添加静态数柱
    staticBtnclick() {
        //console.log(numInput)
        // this.numInput.onInput = () => {
        //     let num = this.numInput.value * 1;

        // }
        staticBtn.onclick = () => {
            console.log(this.val)
                // let val = this.numInput.value;
                // console.log(val)
            var html = ""
                //let div = document.createElement('div');
                //console.log(this.obj)
                // this.obj.map(function(item) {
                //     console.log(item)
                // })
            let div = document.createElement('div')
            div.innerHTML = "1"
            div.className = 'static'
            oBox.appendChild(div)
        }


    }
    moveBtnclick() {
        moveBtn.onclick = () => {
            let div = document.createElement('div');
            div.innerHTML = "2"
            div.className = 'move'
            oBox.appendChild(div)
        }
    }
    allBtnclick() {
        allBtn.onclick = () => {
            let div = document.querySelectorAll('#box div')
                // console.log(div)

            div.forEach((v, i) => {
                if (v.className == "move") {
                    v.className = "jump"
                }
            })
        }
        console.log(111)
    }

}
new StaticNumBlock()

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类

}

// 分别给按钮添加点击事件，实现所要求的的效果