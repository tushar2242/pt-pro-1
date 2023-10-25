import React from "react";

const DataTable = ({head,title}) => {

  return (
    <>

      <div className="container-1" style={{ margin: 'auto' }}>
        <div className="row row--top-40">
          <div className="col-md-12">
            <h2 className="row__title">{title} (7)</h2>
          </div>
        </div>
        <div className="row row--top-20">
          <div className="col-md-12">
            <div className="table-container">
              <table className="table">
                <thead className="table__thead">
                  <tr>
                    <th className="table__th">
                      <input
                        id="selectAll"
                        type="checkbox"
                        className="table__select-row"
                      />
                    </th>
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
          <input
            id=""
            type="checkbox"
            className="table__select-row"
          />
        </td>
        <td className="table-row__td">
          <div className="table-row__img"></div>
          <div className="table-row__info">
            <p className="table-row__name">{props.name}</p>
            <span className="table-row__small">CFO</span>
          </div>
        </td>
        <td data-column="Policy" className="table-row__td">
          <div className="">
            <p className="table-row__policy">$5,000</p>
            <span className="table-row__small">Basic Policy</span>
          </div>
        </td>
        <td data-column="Policy status" className="table-row__td">
          <p className="table-row__p-status status--green status">
            Approved
          </p>
        </td>
        <td data-column="Destination" className="table-row__td">
          Huston, US
        </td>
        <td data-column="Status" className="table-row__td">
          <p className="table-row__status status--green status">
            Active
          </p>
        </td>
        {/* <td data-column="Progress" className="table-row__td">
          <p className="table-row__progress status--blue status">
            On Track
          </p>
        </td> */}

        <td className="table-row__td">
          <svg
            version="1.1"
            className="table-row__edit"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512.001 512.001"

            xmlSpace="preserve"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Edit"
          >
            <g>
              {" "}
              <g>
                {" "}
                <path
                  d="M496.063,62.299l-46.396-46.4c-21.2-21.199-55.69-21.198-76.888,0l-18.16,18.161l123.284,123.294l18.16-18.161    C517.311,117.944,517.314,83.55,496.063,62.299z"
                  style={{ fill: "rgb(158, 171, 180)" }}
                ></path>{" "}
              </g>
            </g>
            <g>
              {" "}
              <g>
                <path
                  d="M22.012,376.747L0.251,494.268c-0.899,4.857,0.649,9.846,4.142,13.339c3.497,3.497,8.487,5.042,13.338,4.143    l117.512-21.763L22.012,376.747z"
                  style={{ fill: "rgb(158, 171, 180)" }}
                ></path>{" "}
              </g>
            </g>
            <g>
              {" "}
              <g>
                {" "}
                <polygon
                  points="333.407,55.274 38.198,350.506 161.482,473.799 456.691,178.568   "
                  style={{ fill: "rgb(158, 171, 180)" }}
                ></polygon>{" "}
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <svg
            data-toggle="tooltip"
            data-placement="bottom"
            title="Delete"
            version="1.1"
            className="table-row__bin"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"

            xmlSpace="preserve"
          >
            <g>
              {" "}
              <g>
                {" "}
                <path
                  d="M436,60h-90V45c0-24.813-20.187-45-45-45h-90c-24.813,0-45,20.187-45,45v15H76c-24.813,0-45,20.187-45,45v30    c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512    h245.207c23.427,0,42.693-17.594,44.815-40.926c0.004-0.043,0.008-0.086,0.011-0.129L449.817,150H466c8.284,0,15-6.716,15-15v-30    C481,80.187,460.813,60,436,60z M196,45c0-8.271,6.729-15,15-15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408    c-0.729,7.753-7.142,13.592-14.934,13.592H133.396c-7.792,0-14.204-5.839-14.934-13.592L92.284,150h327.432L393.537,468.408z     M451,120h-15H76H61v-15c0-8.271,6.729-15,15-15h105h150h105c8.271,0,15,6.729,15,15V120z"
                  style={{ fill: "rgb(158, 171, 180)" }}
                ></path>{" "}
              </g>
            </g>
            <g>
              {" "}
              <g>
                {" "}
                <path
                  d="M256,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C271,186.716,264.284,180,256,180z"
                  style={{ fill: "rgb(158, 171, 180)" }}
                ></path>{" "}
              </g>
            </g>
            <g>
              {" "}
              <g>
                {" "}
                <path
                  d="M346,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C361,186.716,354.284,180,346,180z"
                  style={{ fill: "rgb(158, 171, 180)" }}
                ></path>{" "}
              </g>
            </g>
            <g>
              {" "}
              <g>
                {" "}
                <path
                  d="M166,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C181,186.716,174.284,180,166,180z"
                  style={{ fill: "rgb(158, 171, 180)" }}
                ></path>{" "}
              </g>
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </td>
      </tr>
    </>
  )
}
