// const str=`hi this is raza`
// console.log(typeof str)
// console.log(str)
// const str1= new String("hi this is raza")
// console.log(str1.charAt(1))
// console.log(typeof str1)
// const str2="hi this is raza"
// console.log(str2,"---",str2[0])

// String.charAt()

// const newstr="hi develoepr"
// console.log(newstr.charAt(9))


// String.indexOf()

// const newstr="rhi developerp"
// console.log(newstr.indexOf("e"))
// console.log(newstr.indexOf("e",8))
// console.log(newstr.indexOf("r",-4))
// console.log(newstr.indexOf(" "))

// String.lastIndexOf()

// const newstr="hi developerh"
// console.log(newstr.lastIndexOf("h"))


// String.slice()
// not change the orignal string

// const newstr="hi developerh"
// const newone=newstr.slice(-2)
// console.log(newone)
// console.log(newstr)

// String.subString()
// not change the orignal string

// const newstr="hi developerh"
// const newone=newstr.substring(-12)
// console.log(newone)
// console.log(newstr)

// string.split()

const newstr="hi developerh"
const newone=newstr.split(" ").join("-")
console.log(newone)
console.log(newstr)