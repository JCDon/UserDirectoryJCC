import React, {useState, useEffect} from "react";
import Api from "../../utils/api"
import Searchbar from "../Searchbar/index";
import Table from "../Table/index";


function TableData () {
    const [employees, setEmployee] = useState({
        order: "descend",
        associates: [{}],
        filteredAssociates: [{}],
        headings: [
            {name: "Img", width: "20%", order: "ascend"},
            {name: "Name", width: "20%", order: "ascend"},
            {name: "Phone", width: "20%", order: "ascend"},
            {name: "Email", width: "20%", order: "ascend"},
            {name: "D.O.B", width: "20%", order: "ascend"},

        ]
    })


    useEffect(function () {
        Api.getEmployee().then(data=>{
            setEmployee({
                ...employees,
                associates: data.data.results,
                filteredAssociates: data.data.results
            })
        })
    }, [])

    const handleSearch = (event) => {
        let searchVal = event.target.value;
        let filterEmployees = employees.associates.filter(employee => {
            let employeeName = employee.name.first.toLowerCase() + " " + employee.name.last.toLowerCase()
            if (employeeName.indexOf(searchVal.toLowerCase()) !== -1) {
                return employee
            }
        })
        setEmployee({
            ...employees,
            filteredAssociates: filterEmployees
        })
    }

    const sortEmployee = (heading) => {
        if (employees.order === "descend") {
            setEmployee({
                ...employees,
                order: "ascend"
            })
        } else {
            setEmployee({
                ...employees,
                order: "descend"
            })
        }

        const compareEmployee = (a, b) => {
            if (employees.order === "ascend") {
                if (a [heading] === undefined){
                    return 1
                } else if (b [heading] === undefined) {
                    return -1
            } else if (heading === "name") {
                return a [heading].first.localeCompare(b [heading].first)
            } else {
                return a [heading] - b [heading]
            }
        } else {
            if (employees.order === "descend") {
                if (a [heading] === undefined){
                    return 1
                } else if (b [heading] === undefined) {
                    return -1
            } else if (heading === "name") {
                return b [heading].first.localeCompare(a [heading].first)
            } else {
                return b [heading] - a [heading]
            }
        }
    }
    
    const sortedAssociates = employees.filteredAssociates.sort(compareEmployee)
    setEmployee({
        ...employees,
        filteredAssociates: sortedAssociates
    })
}
    }
return (
    <div>
            <Searchbar handleSearch={handleSearch}/>
            <Table headings={employees.headings} sortEmployee={sortEmployee} filteredAssociates={employees.filteredAssociates}/>
        </div>
    )
    
   
}

export default TableData;