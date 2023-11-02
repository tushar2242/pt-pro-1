import React from "react";

const DataTable = ({head,title}) => {

  return (
    <>

      <div className="container-1" style={{ margin: 'auto' }}>
        <div className="row-1 row--top-40">
          <div className="col-md-12">
            <h2 className="row__title">{title} (7)</h2>
          </div>
        </div>
        <div className="row-1 row--top-20">
          <div className="col-md-12">
            <div className="table-container">
              <table className="table">
                <thead className="table__thead">
                  <tr>

                    {
                     head.map((item)=>{
                        return(
                          <th className="table__th">{item}</th>
                        )
                      })
                    }
                   
                    <th className="table__th"></th>
                  </tr>
                </thead>
                <tbody className="table__tbody">

                  <TableDataList name="Christin Ericssen" />
                  <TableDataList name="aa" />
                  <TableDataList name="bb" />
                  <TableDataList name="cc" />
                  <TableDataList name="dd" />
                  <TableDataList name="ee" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DataTable;



const TableDataList = (props) => {
  return (
    <>
      <tr className="table-row table-row--chris">
        
        <td className="table-row__td">
          {/* <div className="table-row__img"></div> */}
          <div className="table-row__info">
            <p className="table-row__name">{props.name}</p>
            {/* <span className="table-row__small">CFO</span> */}
          </div>
        </td>
        <td data-column="Policy" className="table-row__td">
          <div className="">
            <p className="table-row__policy">$5,000</p>
            {/* <span className="table-row__small">Basic Policy</span> */}
          </div>
        </td>
        <td data-column="Policy status" className="table-row__td">
          <p className="table-row__p-status  status">
            Approved
          </p>
        </td>
        <td data-column="Destination" className="table-row__td">
          Huston, US
        </td>
        <td data-column="Status" className="table-row__td">
          <p className="table-row__status  status">
            Active
          </p>
        </td>
        {/* <td data-column="Progress" className="table-row__td">
          <p className="table-row__progress status--blue status">
            On Track
          </p>
        </td> */}

      
      </tr>
    </>
  )
}
