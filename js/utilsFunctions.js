// utils functions 
function createBook(bookName, path, demonstrate) {
    const bookItem = `
    <li class="p-2 max-w-content flex gap-4">
        <a href=${path} download class=" cursor-pointer text-md font-semibold">${bookName}</a>
        <span> ${demonstrate} </span>
    </li>
    `;
    return bookItem;
};



function createArticle(user, txt, photoPath, isDeveloper, title) {
    const elementHTML = `
    <li class="">
         <div class="flex gap-6">
            <div>
                <div>
                     <img src="${photoPath}" width="40" alt="">
                </div>
            </div>
            <article class="bg-white p-3 rounded-md">
                    <div class="flex items-center gap-3 mb-2">
                         <p class="font-semibold ">
                                ${user}
                        </p>
                        ${isDeveloper ?
            '<div class="img active"> <img src="./assets/vip.png">   </div>'
            :
            ""
        }
                    </div>
                <h6 class="mb-1 font-semibold text-md"> عنوان المقاله : ${title} </h6>
                <p>${txt}</p>
            </article>
        </div>
    </li>
    `;

    return elementHTML;
}



function createContributor(showMobile,showFacebook,showTelegram,mobile,facebookLink,telegram,user,photoPath) {
    const elementHTML = `
    <div class="col-span-6 sm:col-span-4 lg:col-span-3 bg-white contributor">
    <div class="p-3">
        <img src="${photoPath}" class="rounded-full" alt="">
    </div>
    <div class="p-2">
        <p class="text-center mb-2 font-normal"> ${user} </p>
        <p class="text-sm mb-1"> الهاتف : <span class="text-xs"> ${showMobile ? mobile : "غير مرئي"} </span></p>
        <p class="text-sm mb-1" >التلجرام : <span class="text-xs">${showTelegram ? telegram : "غير مرئي"}</span></p>
        <p class="text-sm mb-1">الفيس بوك : <span class="text-xs "> ${showFacebook ? `<a href="${facebookLink}" class="hover:underline">إضغط هنا</a>` : "غير مرئي"} </span></p>
    </div>
    </div>    
    `
    return elementHTML ;
}