 let click = document.getElementById("submit")
 click.onclick = function clicker (e){
     e.preventDefault()
    alert('the button is working') 
    console.log(`clicks also working on ${click}`)
} 

let Focused = () => {
   document.getElementsByTagName('input').style.color="blue"
   console.log('focusing')
}
let Appointment = ()=>{
    console.log('it will take to another page')
   alert('clicking onit will take to Form page')
}
document.getElementById('appointment').addEventListener('click', Appointment); 

const knowmore = document.getElementById('know')
const pannel = document.getElementById('knows')
const para = document.createElement('p')

pannel.appendChild(para)
knowmore.onclick = () => {
    para.textContent = 'by clicking on this know more about doctor'
    para.style.position = 'absolute'
    para.style.top = '460px';
    para.style.left = '134px';
    knowmore.remove()
}

const mydiv = document.getElementById('makes');
const ulist = document.createElement('ul')
const list = document.createElement('li')
const paras = document.createElement('p')
const paras1 = document.createElement('p')
const ima = document.createElement('img')
mydiv.appendChild(ulist)
mydiv.appendChild(ima)
ulist.appendChild(list)
list.appendChild(paras)
list.appendChild(paras1)

mydiv.onclick = function (){
    paras.textContent = `BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell
    anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and
    certain genetic metabolic disorders.`
    paras1.textContent = `It is also used to treat high risk cancers like some cases of Acute Lymphoblastic
    Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings
    Sarcoma and certain relapsed cancers like Lymphomas`
    paras.setAttribute ('class', "bmt-is-the-treatment")
    paras1.setAttribute('class', 'paras1')
  
}

setInterval(function mssg() {
    document.body.onscroll=function (){
        alert('if you like our page please login')
    }
},50000)

const pannel2 = document.getElementById('adding')
const ulist2 = document.createElement('ul')
const list1 = document.createElement('li')
const para1 = document.createElement('p')
const para2 = document.createElement('p')
const para3 = document. createElement('p')
const para4 = document.createElement('p')
const para5 = document.createElement('p')
pannel2.appendChild(ulist2)
ulist2.appendChild(list1)
list1.appendChild(para1)
list1.appendChild(para2)
list1.appendChild(para3)
list1.appendChild(para4)
list1.appendChild(para5)

pannel2.onclick = function (){
    list1.setAttribute('class','dynamics')
    list1.setAttribute('type', 'none')
    para1.textContent = `Autologous Bone Marrow Transplant - Marrow cells are collected from the patient’s
    own body and transfused back after high dose chemotherapy.`
    para2.textContent = `Allogenic Bone Marrow Transplant (Matched Sibling Donor) – Replacement of diseased
    or defective marrow with marrow from a genetically (HLA) matched sibling donor.`
    para3.textContent = `Allogenic Bone Marrow Transplant (Matched Unrelated Donor) – Replacement of diseased
    or defective marrow with marrow from a genetically (HLA) matched donor obtained from bone marrow
    registries in India and abroad`
    para4.textContent = `Haplo-Identical Bone Marrow Transplant - Replacement of diseased or defective marrow
    with marrow from the parent.`
    para5.textContent = `Umbilical cord Bone Marrow Transplant - Replacement of diseased or defective marrow
    with marrow from a genetically (HLA) matched umbilical cord donor obtained from umbilical cord
    registries in India and abroad.`
}
