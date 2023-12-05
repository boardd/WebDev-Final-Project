function searchIndustry(){
  // Declare some Variables
  var industry, name, filter_industry, filter_name, table, tr, td, i, txtValue, txtValue2;
  // Get the user input
  industry = document.getElementById("myInput");
  name = document.getElementById("myInput2")
  // Convert all to Upper Case -> Non Case Sensitive
  if (industry !== undefined){
    filter_industry = industry.value.toUpperCase(); 
    console.log(industry.value)
  }
  if(name !== undefined)
  {
    filter_name = name.value.toUpperCase();
    console.log(name.value)
  }
  //  Get table elements
  table = document.getElementById("myTable");
  // Get the rows of the table
  tr = table.getElementsByTagName("tr");
  
  // Iterate through the rows
  count = 0
  for (i = 0; i < tr.length; i++) {
    // Get the Industy column of the table
    td = tr[i].getElementsByTagName("td")[1];
    // Get the Name column of the table
    td2 = tr[i].getElementsByTagName("td")[0];

    if (td && td2) {
      txtValue = td.textContent || td.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      // Both Filters Used
      if(industry !== undefined && name !== undefined && name.value != "" && industry.value != "" && txtValue.toUpperCase().indexOf(filter_industry) > -1 && txtValue2.toUpperCase().indexOf(filter_name) > -1){
        tr[i].style.display = "";
        count ++;
      }
      // Only Filter by Name
      else if(name !== undefined && name.value != "" && industry.value == "" && txtValue2.toUpperCase().indexOf(filter_name) > -1){
        tr[i].style.display = "";
        count ++;
      }
      // Only filter by Industry
      else if (industry !== undefined && industry.value != "" && name.value == "" && txtValue.toUpperCase().indexOf(filter_industry) > -1) {
        tr[i].style.display = "";
        count ++;
      } 
      // No filters applied
      else if (industry !== undefined && name !== undefined && name.value == "" && industry.value == "") {
        tr[i].style.display = "";
        count ++;
      }
      // Not show results not filtered
      else {
        tr[i].style.display = "none";
      }
    }
  }
  console.log(count)
  no_res = document.getElementById("no-res")
  if (count == 0){
    console.log("no Results")
    no_res.style.display = "block"
  }
  else{
    console.log("results")
    no_res.style.display = "none"
  }
}