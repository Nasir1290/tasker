const tagColour = ["green","blue","red","yellow"]
tagColour.map((ta,index) => {
    console.log(index)
    console.log(tagColour[(tagColour.length*10)%(index+1)])
})