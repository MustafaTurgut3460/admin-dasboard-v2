import React from "react";
import { Avatar, Timeline } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";

import avatar from "../../../assets/images/avatar1.png";
import ProfileAccountTable from "./ProfileAccountTable";

const ProfileAccount = () => {
  return (
    <div>
      <div className="card" style={{paddingRight: 4}}>
        <p style={{ fontSize: "1rem", opacity: 0.7, marginBottom: "2rem" }}>
          Dahil Olunan Projeler
        </p>
        <ProfileAccountTable />
      </div>
      <div className="card">
        <Timeline
          pending="Recording..."
          items={[
            {
              children: (
                <div>
                  <p>Görev Tamamlandı</p>
                  <p style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                    Görevin detayları burada olacak
                  </p>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFile}
                      style={{ color: "#5161ce" }}
                    />
                    <span style={{ fontSize: "0.75rem", marginLeft: "0.5rem", color: "#5161ce"}}>
                      Dosyaismi.pdf
                    </span>
                  </div>
                </div>
              ),
            },
            {
              children: "Solve initial network problems 2015-09-01",
            },
            {
              children: (
                <div>
                  <p>Görev Tamamlandı</p>
                  <p style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                    Görevin detayları burada olacak
                  </p>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <Avatar src={avatar} />
                    <div>
                      <span
                        style={{ fontSize: "0.75rem", marginLeft: "0.5rem", display: "block" }}
                      >
                        Mustafa Turgut
                      </span>
                      <span
                        style={{ fontSize: "0.75rem", marginLeft: "0.5rem", display: "block", opacity: 0.5 }}
                      >
                        Admin
                      </span>
                    </div>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProfileAccount;
