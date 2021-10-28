import React from "react";
import "../style.css";

function Screen2() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          padding: "25px",
        }}
      >
        <div className="d-flex">
          <div style={{ width: "210px" }}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.9543 0 0 8.95431 0 20C0 31.0457 8.9543 40 20 40ZM9.69231 32.2111V14.5818C9.69231 14.3997 9.7815 14.2291 9.93119 14.1249L19.9113 7.17713C20.1032 7.04351 20.3583 7.04351 20.5502 7.17713L30.5304 14.1249C30.68 14.2291 30.7692 14.3997 30.7692 14.5818V28.6837C30.7692 28.9914 30.5193 29.2408 30.2109 29.2408H15.6607C15.5463 29.2408 15.4347 29.2759 15.3409 29.3413L10.5704 32.6678C10.2004 32.9259 9.69231 32.6617 9.69231 32.2111Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="2.90598"
                  y1="36.2676"
                  x2="36.7193"
                  y2="-0.923466"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.276042" stop-color="#330B86" />
                  <stop offset="1" stop-color="#7329C6" />
                </linearGradient>
              </defs>
            </svg>
            &nbsp;&nbsp;&nbsp;
            <svg
              width="100"
              height="36"
              viewBox="0 0 100 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9053 0.115684L11.0528 12.301L2.20033 0.115684H0V21.0287H5.47525V12.8152L11.04 20.6816H11.0784L16.6304 12.8152V21.0287H22.1057V0.115684H19.9053Z"
                fill="#330B86"
              />
              <path
                d="M30.5232 21.0287H35.9601V12.0825L42.3308 0.308489H36.1136L33.2481 6.31118L30.3697 0.308489H24.1653L30.5232 12.0825V21.0287Z"
                fill="#330B86"
              />
              <path
                d="M50.8251 21.3115C54.9571 21.3115 58.6158 18.8564 58.6158 14.9103C58.6158 11.8511 56.4795 9.87166 53.2557 8.50917C51.0298 7.57084 49.5714 7.26235 49.5714 6.31118C49.5714 5.60422 50.3774 5.02581 51.5031 5.02581C52.4882 5.02581 54.0745 5.50139 54.6885 6.59396L57.8483 3.53477C57.0423 1.49103 54.5862 0 51.4392 0C47.5246 0 44.1346 2.55789 44.1346 6.14408C44.1346 9.26754 46.3733 10.9899 48.983 12.1211C51.0042 13.0208 53.115 13.9591 53.115 15.026C53.115 15.8744 51.9765 16.2985 50.8123 16.2985C49.0853 16.2985 47.4862 15.5273 46.6291 14.2548L43.3158 17.5196C44.3521 19.8076 47.4351 21.3115 50.8251 21.3115Z"
                fill="#330B86"
              />
              <path
                d="M61.1232 21.0287H66.5984V0.308489H61.1232V21.0287Z"
                fill="#330B86"
              />
              <path
                d="M84.3034 0.308489H68.9267V5.44998H73.8774V21.0287H79.3655V5.44998H84.3034V0.308489Z"
                fill="#330B86"
              />
              <path
                d="M100 5.42427V0.308489H86.6317V21.0287H100V15.8744H92.043V12.9051H98.5928V8.31636H92.043V5.42427H100Z"
                fill="#330B86"
              />
            </svg>
          </div>
          <div
            className="ms-auto d-flex align-items-center justify-content-between"
            style={{ width: "200px" }}
          >
            <span
              style={{
                border: "1px solid lightgray",
                backgroundColor:"lightgray",
                width: "35px",
                height: "35px",
                borderRadius: "100%",
              }}
            ></span>
            <span style={{ fontWeight: "bolder" }}>Kishore</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="grey"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="36px"
              viewBox="0 0 24 24"
              width="36px"
              fill="grey"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
            </svg>
          </div>
        </div>{" "}
        <br />
        <div className="conatiner-fluid d-flex" style={{ height: "90%" }}>
          <div
            className="d-flex flex-column"
            style={{
              width: "300px",
              backgroundColor: "rgba(252, 251, 255, 1)",
            }}
          >
            <div
              id="hover"
              className="d-flex"
              style={{ width: "100%", height: "70px", padding: "20px" }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 0.5H12.5V15.5H0.5V0.5ZM27.5 0.5H15.5V9.5H27.5V0.5ZM9.5 12.5V3.5H3.5V12.5H9.5ZM24.5 6.5V3.5H18.5V6.5H24.5ZM24.5 15.5V24.5H18.5V15.5H24.5ZM9.5 24.5V21.5H3.5V24.5H9.5ZM27.5 12.5H15.5V27.5H27.5V12.5ZM0.5 18.5H12.5V27.5H0.5V18.5Z"
                  fill="#828282"
                />
              </svg>{" "}
              &nbsp; &nbsp;
              <span className="d-flex align-items-center">Projects</span>
            </div>
            <div
              className="d-flex"
              id="hover"
              style={{ width: "100%", padding: "20px", height: "70px" }}
            >
              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27 6.5H21V3.5L18 0.5H12L9 3.5V6.5H3C1.35 6.5 0 7.85 0 9.5V17C0 18.125 0.6 19.07 1.5 19.595V24.5C1.5 26.165 2.835 27.5 4.5 27.5H25.5C27.165 27.5 28.5 26.165 28.5 24.5V19.58C29.385 19.055 30 18.095 30 17V9.5C30 7.85 28.65 6.5 27 6.5ZM12 3.5H18V6.5H12V3.5ZM27 9.5H3V17H10.5V12.5H19.5V17H27V9.5ZM16.5 18.5H13.5V15.5H16.5V18.5ZM4.5 24.5H25.5V20H19.5V21.5H10.5V20H4.5V24.5Z"
                  fill="black"
                  fill-opacity="0.54"
                />
              </svg>{" "}
              &nbsp; &nbsp;
              <span className="d-flex align-items-center">
                Organisation Profile
              </span>{" "}
            </div>
            <div
              id="hover"
              className="d-flex"
              style={{ width: "100%", height: "70px", padding: "20px" }}
            >
              <svg
                width="28"
                height="34"
                viewBox="0 0 28 34"
                fill="grey"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.5 6.5L14 0.5L27.5 6.5V15.5C27.5 23.825 21.74 31.61 14 33.5C6.26 31.61 0.5 23.825 0.5 15.5V6.5ZM24.5 16.985H14V3.785L3.5 8.45V17H14V30.395C19.58 28.67 23.705 23.165 24.5 16.985Z"
                  fill="grey"
                />
              </svg>{" "}
              &nbsp; &nbsp;
              <span className="d-flex align-items-center">Access Control</span>
            </div>
          </div>
          <div style={{ width: "77%", paddingTop: "25px" }}>
            <div className="d-flex">
              <div
                className="container d-flex justify-content-between"
                style={{ borderBottom: "1px solid black" }}
              >
                <div className="d-flex">
                  <div style={{ marginLeft: "15px" }}>
                    <div className="d-flex wifi">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="36px"
                        viewBox="0 0 24 24"
                        width="36px"
                        fill="grey"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <circle cx="6.18" cy="17.82" r="2.18" />
                        <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />
                      </svg>

                      <span
                        className="d-flex align-items-center"
                        style={{ fontSize: "14px", fontWeight: "bolder" }}
                      >
                        Permissions
                      </span>
                    </div>
                  </div>
                  <div>
                    <div style={{ marginLeft: "15px" }}>
                      <div className="d-flex purple">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="36px"
                          viewBox="0 0 24 24"
                          width="36px"
                          fill="grey"
                        >
                          <g>
                            <path d="M0,0h24v24H0V0z" fill="none" />
                          </g>
                          <g>
                            <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z" />
                          </g>
                        </svg>
                        <span
                          className="d-flex align-items-center"
                          style={{ fontSize: "14px", fontWeight: "bolder" }}
                        >
                          &nbsp;Approval Matrix
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div style={{ marginLeft: "15px" }}>
                      <div className="d-flex">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="36px"
                          viewBox="0 0 24 24"
                          width="36px"
                          fill="grey"
                        >
                          <path d="M.01 0h24v24h-24V0z" fill="none" />
                          <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" />
                        </svg>
                        <span
                          className="d-flex align-items-center"
                          style={{
                            fontSize: "14px",
                            color: "black",
                            fontWeight: "bolder",
                          }}
                        >
                          Last sync 15 mins ago
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="container" style={{ width: "85%" }}>
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ width: "220px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="36px"
                  viewBox="0 0 24 24"
                  width="36px"
                  fill="grey"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z" />
                </svg>{" "}
                <span
                  style={{
                    color: "rgba(103, 58, 183, 1)",
                  }}
                >
                  Management Team
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="grey"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                </svg>
              </div>
              <br />

              <div
                className="d-flex"
                style={{ borderBottom: "1px solid grey" }}
              >
                <div style={{ marginLeft: "15px" }}>
                  <div className="d-flex wifi">
                    <span
                      className="d-flex align-items-center"
                      style={{ fontSize: "14px", fontWeight: "bolder" }}
                    >
                      Access Control
                    </span>
                  </div>
                </div>
                <div>
                  <div style={{ marginLeft: "15px" }}>
                    <div className="d-flex purple">
                      <span
                        className="d-flex align-items-center"
                        style={{ fontSize: "14px", fontWeight: "bolder" }}
                      >
                        &nbsp;Assigned Members
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <table class="table">
                <thead
                  class="thead-light"
                  style={{ backgroundColor: "rgba(242, 242, 242, 1)" }}
                >
                  <tr style={{ textAlign: "center" }}>
                    <th scope="col">Department/Role Name</th>
                    <th scope="col">Access Level</th>
                    <th scope="col">Summary</th>
                    <th scope="col">Last Updated</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="row" style={{ textAlign: "start" }}>
                      {" "}
                      <div className="d-flex align-items-center">
                        <span class="material-icons-outlined">
                          add_circle_outline
                        </span>{" "}
                        &nbsp;Budget
                      </div>
                    </th>
                    <td>
                      <button
                        style={{
                          borderRadius: "20px",
                          width: "100%",
                          border: "1px solid green",
                          color: "green",
                          backgroundColor: "lightgreen",
                        }}
                      >
                        All Access
                      </button>
                    </td>
                    <td>
                      <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ width: "120px" }}
                      >
                        <span
                          style={{
                            borderRight: "2px solid grey",
                            fontSize: "12px",
                            padding: "5px",
                            fontWeight: "bolder",
                          }}
                        >
                          View
                        </span>
                        <span
                          style={{
                            borderRight: "2px solid grey",
                            fontSize: "12px",
                            padding: "5px",
                            fontWeight: "bolder",
                          }}
                        >
                          Create
                        </span>
                        <span
                          style={{
                            borderRight: "2px solid grey",
                            fontSize: "12px",
                            padding: "5px",
                            fontWeight: "bolder",
                          }}
                        >
                          Edit
                        </span>
                        <span
                          style={{
                            borderRight: "2px solid grey",
                            fontSize: "12px",
                            padding: "5px",
                            fontWeight: "bolder",
                          }}
                        >
                          Delete
                        </span>
                      </div>
                    </td>
                    <td>1 min ago</td>
                    <td>
                      <div class="form-check form-switch d-flex justify-content-center align-items-center">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="row" style={{ textAlign: "start" }}>
                      {" "}
                      <div className="d-flex align-items-center">
                        <span class="material-icons-outlined">
                          add_circle_outline
                        </span>{" "}
                        &nbsp;Bidding
                      </div>
                    </th>
                    <td>
                      <button
                        style={{
                          borderRadius: "20px",
                          width: "100%",
                          border: "1px solid grey",
                          color: "grey",
                          backgroundColor: "rgba(242, 242, 242, 1)",
                        }}
                      >
                        No Access
                      </button>
                    </td>
                    <td>
                      <span>-</span>
                    </td>
                    <td>1 min ago</td>
                    <td>
                      <div class="form-check form-switch d-flex justify-content-center align-items-center">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="row" style={{ textAlign: "start" }}>
                      {" "}
                      <div className="d-flex align-items-center">
                        <span class="material-icons-outlined">
                          add_circle_outline
                        </span>{" "}
                        &nbsp;Vendor Portal
                      </div>
                    </th>
                    <td>
                      <button
                        style={{
                          borderRadius: "20px",
                          width: "100%",
                          border: "1px solid red",
                          color: "red",
                          backgroundColor: "rgba(255, 8, 8, 0.3)",
                        }}
                      >
                        Restricted Access
                      </button>
                    </td>
                    <td>
                      <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ width: "120px" }}
                      >
                        <span
                          style={{
                            borderRight: "2px solid grey",
                            fontSize: "12px",
                            padding: "5px",
                            fontWeight: "bolder",
                          }}
                        >
                          View
                        </span>
                        <span
                          style={{
                            borderRight: "2px solid grey",
                            fontSize: "12px",
                            padding: "5px",
                            fontWeight: "bolder",
                          }}
                        >
                          Create
                        </span>
                        <span
                          style={{
                            borderRight: "2px solid grey",
                            fontSize: "12px",
                            padding: "5px",
                            fontWeight: "bolder",
                          }}
                        >
                          Edit
                        </span>
                        <span
                          style={{
                            borderRight: "2px solid grey",
                            fontSize: "12px",
                            padding: "5px",
                            fontWeight: "bolder",
                          }}
                        >
                          Delete
                        </span>
                      </div>
                    </td>
                    <td>1 min ago</td>
                    <td>
                      <div class="form-check form-switch d-flex justify-content-center align-items-center">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="row" style={{ textAlign: "start" }}>
                      {" "}
                      <div className="d-flex align-items-center">
                        <span class="material-icons-outlined">
                          add_circle_outline
                        </span>{" "}
                        &nbsp;Bidding
                      </div>
                    </th>
                    <td>
                      <button
                        style={{
                          borderRadius: "20px",
                          width: "100%",
                          border: "1px solid grey",
                          color: "grey",
                          backgroundColor: "rgba(242, 242, 242, 1)",
                        }}
                      >
                        No Access
                      </button>
                    </td>
                    <td>
                      <span
                        style={{
                          borderRight: "2px solid grey",
                          fontSize: "12px",
                          padding: "5px",
                          fontWeight: "bolder",
                        }}
                      >
                        View
                      </span>
                      <span
                        style={{
                          borderRight: "2px solid grey",
                          fontSize: "12px",
                          padding: "5px",
                          fontWeight: "bolder",
                        }}
                      >
                        Create
                      </span>
                    </td>
                    <td>1 min ago</td>
                    <td>
                      <div class="form-check form-switch d-flex justify-content-center align-items-center">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="row" style={{ textAlign: "start" }}>
                      {" "}
                      <div className="d-flex align-items-center">
                        <span class="material-icons-outlined">
                          add_circle_outline
                        </span>{" "}
                        &nbsp;Purchase Order/ Work Order
                      </div>
                    </th>
                    <td>
                      <button
                        style={{
                          borderRadius: "20px",
                          width: "100%",
                          border: "1px solid red",
                          color: "red",
                          backgroundColor: "rgba(255, 8, 8, 0.3)",
                        }}
                      >
                        Restricted Access
                      </button>
                    </td>
                    <td>
                      <span
                        style={{
                          borderRight: "2px solid grey",
                          fontSize: "12px",
                          padding: "5px",
                          fontWeight: "bolder",
                        }}
                      >
                        View
                      </span>
                      <span
                        style={{
                          borderRight: "2px solid grey",
                          fontSize: "12px",
                          padding: "5px",
                          fontWeight: "bolder",
                        }}
                      >
                        Create
                      </span>
                    </td>
                    <td>1 min ago</td>
                    <td>
                      <div class="form-check form-switch d-flex justify-content-center align-items-center">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <th scope="row" style={{ textAlign: "start" }}>
                      {" "}
                      <div className="d-flex align-items-center">
                        <span class="material-icons-outlined">
                          add_circle_outline
                        </span>{" "}
                        &nbsp;Organisation Profile
                      </div>
                    </th>
                    <td>
                      <button
                        style={{
                          borderRadius: "20px",
                          width: "100%",
                          border: "1px solid green",
                          color: "green",
                          backgroundColor: "lightgreen",
                        }}
                      >
                        All Access
                      </button>
                    </td>
                    <td>
                      <span>-</span>
                    </td>
                    <td>1 min ago</td>
                    <td>
                      <div class="form-check form-switch d-flex justify-content-center align-items-center">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen2;
