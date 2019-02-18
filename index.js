const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
let count = 0;
class StaticNumBlock { // 静态数柱的类
    constructor(parent, option) {
        this.parent = parent;
        this.option = option;
        this.init();
    }
    init() {
        let { num, classname, style } = this.option;
        this.parent.innerHTML += `<div class="${classname}" style="${Object.entries(style).map(item=>item[0]+":"+item[1]).join(";")}">
                        ${num}
                    </div>`
    }
}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(parent, option) {
        strict(parent, option)
    }
}

// 分别给按钮添加点击事件，实现所要求的的效果
staticBtn.onclick = () => { //点击添加静态的数柱
    let value = numInput.value.trim()
    if (getvalue(value)) {
        new StaticNumBlock(oBox, {
            num: value * 1,
            classname: "",
            style: {
                width: "30px",
                height: value * 10 + 20 + "px",
                background: "red",
                color: "#fff",
                left: 40 * (count - 1) + "px",
                "text-align": "center",
                "line-height": value * 10 + 20 + "px",
                "border-radius": "8px",
                "margin-right": "10px",
                float: "left"
            }
        })
    }
}

moveBtn.onclick = () => { //点击添加静态的数柱
    let value = numInput.value.trim()
    if (getvalue(value)) {
        new StaticNumBlock(oBox, {
            num: value * 1,
            classname: "flag",
            style: {
                width: "30px",
                height: value * 10 + 20 + "px",
                background: "pink",
                color: "#fff",
                left: 40 * (count - 1) + "px",
                "text-align": "center",
                "line-height": value * 10 + 20 + "px",
                "border-radius": "8px",
                "margin-right": "10px",
                float: "left"
            }
        })
    }
}

oBox.addEventListener("click", (e) => { //点击动态柱子
    let tar = e.target;
    if (tar.className == "flag") {
        tar.classList.add("jump")
        setTimeout(() => {
            tar.classList.remove("jump")
        }, 1000)
    }
})

allBtn.onclick = () => { //点击所有会动的数柱依次运动
    let flag = [...document.querySelectorAll(".flag")];

    flag.map((item, index) => {
        setTimeout(() => {
            item.classList.add("jump")
        }, 1000 * index)
    })
    setTimeout(() => {
        flag.map((item, index) => {
            item.classList.remove("jump")
        })
    }, 1000 * flag.length)
}


function getvalue(value) {
    let ind = value.indexOf(".")
        //判断输入数柱数量是否为1-9的整数
    if (value * 1 >= 1 && value * 1 <= 9) {
        if (ind == -1 && typeof(value * 1) == "number") {
            count++;
            return true;
        }
    } else {
        alert("请输入1-9的整数");
        return false;
    }
}