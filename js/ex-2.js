function showTags() {
    let tags = document.all;
    
    let rows = "<tr><th>Tag name </th><th>Count</th></tr>";
    for (let i = 0; i < tags.length; i++) {
        rows += "<tr><td>" + tags[i].tagName + "</td><td></td></tr>";
    }

    document.getElementById('myTable').innerHTML = rows;
}