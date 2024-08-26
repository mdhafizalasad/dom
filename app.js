//  const name ="DOM"
//  console.log (name);

// condole.log(document);

//  const person ={
//     Name: "Nam bolle Chakri Thakbe na",
//     Age: 12,
//     Address: "Kalabagan",
//     isBeauty: true
//  }

//  person.Address  // Object Element get
//  person.Name ="Asad" // Object Element value change

// console.log(document.html);

// console.log(document.body);
// const blogTitles = document.getElementsByTagName('h3');
// //console.log(blogTitles);
// for (const title of blogTitles){
// //console.log(title.innerText);
// //title.innerText = "Amar Shonar Bangla Ami Tomai "
// // title.style.color = "green"
// title.style.background = "green"

// }

const getReady = document.getElementsByTagName('h1');
for (const title of getReady){
title.style.textAlign ="center"

}

// const blogDetails = document.getElementsByTagName('p');
// //console.log(blogDetails);
// for (const blog of blogDetails){
//     blog.style.backgroundColor = 'purple'//#000
// }

// const thirdTitle = document.getElementById("third-title");
//  //console.log(thirdTitle);
//  thirdTitle.style.border = "3px solid black" //3px dotted black
//  thirdTitle.style.padding = "20px"
 
 
 // create blog

 const article = document.createElement('article'); // 'h1'
 //console.log(article);
 article.classList.add('blog-main')

 const h3 = document.createElement('h3')
h3.innerText ="My Awesome blog created by Students"

 const p = document.createElement('p')
 p.innerText = "$$$$$ Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error iste voluptatibus, enim itaque et asperiores. Modi, ut veniam maxime in perspiciatis porro maiores sequi non quaerat voluptatibus impedit, recusandae eos sint itaque accusamus dolor, voluptas commodi temporibus animi earum. $$$$"
 
  //console.log(p);

  article.appendChild(h3)
  article.appendChild(p)
 //console.log(article);
//  document.body.appendChild(article)
const div = document.getElementById("article-main");
div.appendChild(article)

const blogs = document.getElementsByClassName("blog-main");
 //console.log(blogs);
 for (const blog of blogs) {
    //console.log(blog);
    blog.style.border = "3px solid green" 
    blog.style.margin = "15px" 
    blog.style.padding = "15px" 
 }
