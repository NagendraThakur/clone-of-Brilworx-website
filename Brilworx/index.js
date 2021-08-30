const navBarItem = document.querySelectorAll(".navBarItem");
console.log(navBarItem);

navBarItem.forEach(item => item.addEventListener("mouseover", () => 
{   
    if(item.classList.contains("navBarActive"))
    {
        console.log("already selected");
    }
    else
    {
        item.classList.add("navBarOnHover");    
    }
    
}));

navBarItem.forEach(item => item.addEventListener("mouseout", () => item.classList.remove("navBarOnHover")));

for(i=0; i<=navBarItem.length; i++)
{
    if(navBarItem[i].href === document.URL)
    {
        navBarItem[i].classList.add("navBarActive");
    }
    else
    {
        navBarItem[i].classList.remove("navBarActive");
    }
}