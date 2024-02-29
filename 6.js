//5 LCM/HCF
const input=require("readline-sync")
// let a=input.questionInt("Enter a:")
// let b=input.questionInt("Enter b:")
// let c=a*b;
// let hcf;
// let lcm;
// while(a!=b)
// {
//     if(a>b)
//     {
//         a=a-b;
//         hcf=a;
//     }
//     else
//     {
//         b=b-a;
//         hcf=b;
//     }
// }
// hcf=hcf;
// console.log("hcf:",hcf)
// lcm=c/hcf;
// console.log("lcm:",lcm)

//6 perfact num
// let n=input.questionInt("Enter n:")
// let sum=0;
// let i=1;
// while (i<=n) 
// {
//     if(n%i==0)
//     {
//         sum=sum+i;
//     }
//     else if(sum==n)
//     {
//         console.log("n is perfact number");
//     }
//     else{
//         console.log("n is not perfact number");
//     }
//     i++;
// }

//7 patten
// let n=input.questionInt("Enter n: ")
// let i=1;j=1;s="";
// while(i<=n)
// {
//     if(j<=i)
//     {
//      s +="* "
//      console.log(s);
//     } else
//     {
//      ("\n");j++;
//     }
//      i++;
// }

//8 patten 
// 1
// 2 3
// // 4 5 6 
// let n=input.questionInt("Enter n: ")
// let k=0; s="";
// for(let i=1;i<=n;i++) 
// {
//     for(let j=1;j<=i;j++)
//     {
//        k++
//        s+= k +" "
//     }
//        s+=("\n");
// }
//    console.log(s);


// //9 patten opp.
// // * * * * *
// // * * * *
// // * * *
// // * *
// // *
// let n=input.questionInt("Enter n: ") 
// let s=""; 
// for(let i=1;i<=n;i++)
// {
//    for(let j=n;j>=i;j--)
//    {
//      s+= "*"+ " "
//    } 
//    s+="\n"
// }
//  console.log(s);

// 10  1
   //  1 2 1
// //  1 2 3 2 1
// let n=input.questionInt("Enter n: ") 
// let s="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         s+= j +" ";
//     }
//     for(let j=i-1;j>0;j--){
//         s+= j+" ";
//     }
//     s+="\n";
// }
// console.log(s);


// question 11
//  *
//  * * *
//  * * * * *
//  * * *
//  *
// let n=input.questionInt("Enter n: ")
//  let st=" ";i=1;j=1;
// while (i<=n) {
//     console.log("*".repeat(j));
//     i++
//     j+=2
// }
// let k=j-4
// while (k>0) {
//     console.log("*".repeat(k));
//     k-=2
// }



// 7 in short way
// let s=" "
// for(i=1;i<=n;i++){
//     console.log("* ".repeat(i));
// }


// questions 11 
// *
// * * *
// * * * * *
// * * * * * * *

