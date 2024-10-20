import "../index.css";


function makePillBtn(bx,by) {
    let newDiv={id:(bx.toString())+(by.toString()),top:(Number(by)-0.25).toString()+"rem",left: (Number(bx)-0.25).toString()+"rem",};
 
    return newDiv;
}

export default makePillBtn;