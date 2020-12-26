import React, { useState } from 'react'
import dayjs from "dayjs";

export default function InforItem(props) {
    const [toggle, setToggle] = useState(true);
    const {item} = props;

    const renderDanhSachGhe = () => {
        let listOfGhe = [];
        item.danhSachGhe.forEach((item)=>{
            if(item.tenGhe /16 <=1) listOfGhe.push(`A${item.tenGhe}`);
            else if(item.tenGhe / 16 <=2) listOfGhe.push("B"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
            else if(item.tenGhe / 16 <=3) listOfGhe.push("C"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
            else if(item.tenGhe / 16 <=4) listOfGhe.push("D"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
            else if(item.tenGhe / 16 <=5) listOfGhe.push("E"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
            else if(item.tenGhe / 16 <=6) listOfGhe.push("F"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
            else if(item.tenGhe / 16 <=7) listOfGhe.push("G"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
            else if(item.tenGhe / 16 <=8) listOfGhe.push("H"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
            else if(item.tenGhe / 16 <=9) listOfGhe.push("I"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
            else if(item.tenGhe / 16 <=10) listOfGhe.push("K"+`0${+item.tenGhe % 16 === 0 ? 16 : +item.tenGhe % 16}`.slice(-2))
        })
        return listOfGhe.join(", ");
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <>
            <li onClick={()=>{handleToggle()}} className="row" key={item.maVe} style={{borderTop:"1px solid gray",padding:"15px 0",cursor:"pointer"}}>
            <p className="date col-sm-4">
              {dayjs(item.ngayDat).format("DD/MM/YYYY")} :{" "}
              {dayjs(item.ngayDat).format("HH:mm:ss")}
            </p>
            <div className="infor__detail col-sm-8 p-0 m-0">
            <p className="movieName col-sm-12">{item.tenPhim}</p>
            <div className={toggle? "col-sm-12 moreInfor active":"col-sm-12 moreInfor"}>
            {/* <div className="col-sm-12 moreInfor" style={{display: toggle? "block" : "none",transition:"all 0.5s"}}> */}
                <p className="tenHTR"> Hệ thống rạp: {item.danhSachGhe[0].tenHeThongRap} | {item.danhSachGhe[0].tenCumRap}</p>
                <div className="danhSachGhe">
                    Ghế: {renderDanhSachGhe()}
                </div>
                
            </div>
            </div>
          </li>
        </>
    )
}
