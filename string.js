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

// const newstr="hi developerh"
// const newone=newstr.split("e")
// console.log(newone)
// console.log(newstr)

// string.includes()

// const newstr="the quick brown fox jump over the lazy dog"
// const newone=newstr.includes("fox",19)
// console.log(newone)
// console.log(newstr)

// string.startWith()

// const newstr="the quick brown fox jump over the lazy dog"
// const newone=newstr.startsWith("i")
// const newend=newstr.endsWith("dog")
// console.log(newone)
// console.log(newstr)
// console.log(newend)

// String.concat()

// const newstr="the quick brown fox jump over the lazy dog"
// const newone=newstr.concat(" heello")
// console.log(newone)"
// const assste="hi this is raza"
// const assene="new one below"
// console.log(assste+"",assene)


// String.repeat()

// const newstr="this is developer"
// console.log(newstr.repeat(newstr.length))

// String.Trim()

//  const newstr=" this is developer"
//  console.log(newstr.trim())

// String.padStart()

//  const newstr="developer"
//  console.log(newstr.padStart(9,"foo"))
// var totn_string = 'TechOnTheNet';

// console.log(totn_string.padStart(20));


//  const newstr="developer"
//  console.log(newstr.padEnd(19,"foo"))


// const localcomp="software engineer engineer"
// const newlocalcomp="software software"
  
// console.log(localcomp.localeCompare(newlocalcomp))


// String.search()

// const str='The rain in SPAIN stays mainly in the plain'
// console.log(str.search("main"))

// String.match()

const str='The rain in SPAIN stays mainly in the plain SPAIN'
console.log(str.match(/rain/gi))
console.log(str.match("SPAIN"))