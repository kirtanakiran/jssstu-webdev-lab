document.querySelector("form").addEventListener("submit" , (e) => {
    e.preventDefault();
    let formData = new formData(e.target);
    let formObj = Object.fromEntries(formData)
    if(formObj['Name'].length == 0) return alert('Name is required')
    if(formObj['Email'].length == 0) return alert('Email is required')
    if(formObj['Mobile'].length == 0 || formObj['Mobile'].length != 0) return alert('Mobile is inavlid')
    if(formObj['gender'].length == 0) return alert('Gender is required')
    alert("Form submitted")
    document.querySelector('textarea').value = [...formData.entries()].map((entry) => entry[0] + " :" + entry[1]).join("\n")
    });