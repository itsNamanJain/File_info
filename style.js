document.getElementById("folder").addEventListener("change",(e)=>{
    document.getElementById("para").style.display="none";
    var table = document.getElementById("table");
    if(table.classList.contains("d-none")){
        table.classList.remove("d-none");
    }
    var tbody= document.getElementById("tbody");
    tbody.innerHTML="";
    var files = e.target.files;

    for(let i=0;i<files.length;i++){
        let value= 0;
        var row = document.createElement("tr");
        var row_data1 = document.createElement("td");
        var row_data2 = document.createElement("td"); 
        row_data1.innerHTML=files[i].webkitRelativePath;
        if(files[i].size<1024){
            row_data2.innerHTML=files[i].size+" bytes";
        }
        else if(files[i].size<1048576){
            value = Math.ceil(files[i].size/1024);
            row_data2.innerHTML=value+" kB";
        }
        else if(files[i].size<1073741824){
            value=Math.ceil(files[i].size/1048576);
            
            row_data2.innerHTML=value+" MB";
        }
        else if(files[i].size<1.09e+12){
            value=Math.ceil(files[i].size/1073741824);
            row_data2.innerHTML=value+" GB";
        }
        else{
            value=Math.ceil(files[i].size/1.09e+12);
            row_data2.innerHTML=value+" TB";
        }
        
        row.appendChild(row_data1);
        row.appendChild(row_data2);
        tbody.appendChild(row);
    };
},false);