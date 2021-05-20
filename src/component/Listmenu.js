import React, { Component } from "react";

export class Listmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listdatas: [
        {
          images:
            "https://image.shutterstock.com/image-photo/strong-athletic-man-showing-muscular-260nw-392665192.jpg",
          name: "Excercise Program",
          detail:
            "ใครที่เบื่อกับพุงย้อย ๆ ของตัวเองต้องมาดูตารางนี้เลยค่ะ กับการออกกำลังกายลดหน้าท้องง่าย ๆ ด้วยตัวเอง แต่ละท่าใช้เวลาไม่นานเลย แค่ต้องขยันทำอย่างสม่ำเสมอควบคู่ไปกับการคุมอาหารค่ะ ทีนี้สาว ๆ ก็จะมีหน้าท้องสวยน่ามอง พุงไม่ย้อย จะใส่เสื้อเอวลอยยังไงก็มั่นใจ ไม่ต้องอายพุงของตัวเองอีกแล้ว อ่านต่อได้ที่ https://www.wongnai.com/articles/exercise-listing?ref=ct",
          harf: "https://www.wsj.com/articles/a-full-body-workout-to-shake-up-your-exercise-routine-at-home-11620468000",
        },
        {
          images:
            "https://qph.fs.quoracdn.net/main-qimg-b62d0bdece0e861d249f892d01c9754b",
          name: "Shop",
          detail:
            "สาว ๆ หน้าอกไข่ดาวหลายคนคงจะน้อยใจที่เกิดมาหน้าอกเล็ก กับบางคนหน้าอกเล็ก ๆ นี่มันก็ทำให้หุ่นไม่สมส่วน ใส่เสื้อผ้าอะไรก็ไม่สวยไม่เป๊ะ มาค่ะวันนี้เราจะมาแชร์ท่า 5 ท่าออกกำลังกายช่วยเสริมหน้าอกกันดีกว่า อ่านต่อได้ที่ https://www.wongnai.com/articles/5-exercises-for-bigger-breast?ref=ct",
          harf: "https://www.lazada.co.th/?exlaz=d_1:mm_150050845_51350203_2010350203::11:12353920517!117280950865!lazada!e!aud-890421776774:kwd-19342147066!c!!!!500178186914!&gclid=Cj0KCQjwkZiFBhD9ARIsAGxFX8Cg2FqhGbKzVPlIZw8t3tT_10QfEoFR6NL4jeTH2k6nL6FtUj8jHJgaAjdsEALw_wcB",
        },
        {
          images:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmLBLWZDA6FOi7FNrmx-qZ3xaEHWcEjPY7YdrT-xNnx75aMeqaEMCiKXtdfE2NuaKLpw&usqp=CAU",
          name: "Youtube",
          detail:
            "ผู้ชายแมน ๆ ก็อยากมีมัดกล้ามไว้อวดสาวกันทั้งนั้นแหละ แต่จะทำยังไง เล่นกล้ามแขนแบบไหนถึงจะมีกล้ามแขนสวย ๆ กับเขาบ้าง แล้วต้องเริ่มต้นจากอะไรก่อน หลายคนที่ยังไม่เคยฝึกออกกำลังกายแบบนี้อาจจะสงสัยจนเริ่มต้นไม่ถูก ทาง Thomas Thailand ได้รวมสเต็ปการเล่นกล้ามแขน ทั้งชื่อท่าเล่นกล้ามแขน อุปกรณ์ที่ใช้ วิธีการเล่น ระยะเวลา จำนวนครั้ง และเทคนิคฉบับมือใหม่หัดเล่นกล้ามมาฝากกัน พร้อมแล้วไปดูพร้อมกันเลยดีกว่าครับ",

          harf: "https://www.youtube.com/",
        },
        {
          images:
            "https://betterme.world/articles/wp-content/uploads/2020/06/shutterstock_392510389-1024x557.jpg",
          name: "Clean food",
          detail:
            "เรื่อง “ขา” ถือว่าเป็นปัญหาใหญ่ของสาว ๆ เช่นกันค่ะ ใครขาเล็กขาเรียวก็โชคดีไป แต่ถ้าขาใหญ่นี่ก็ลำบากอยู่เหมือนกันนะคะ จะใส่กางเกงขาสั้นก็ไม่มั่นใจ ถ่ายรูปทีก็บิดแล้วบิดอีกกว่าจะได้มุมผอม ๆ เรามาแก้ที่ต้นเหตุด้วยการออกกำลังกายกับท่าลดขาเรียวใน 30 วันกันดีกว่า แต่ละท่าทำตามได้ไม่ยากเลยค่ะ ทุกคนจะได้มีขาสวย ๆ เพิ่มความมั่นใจให้ตัวเอง อ่านต่อได้ที่ https://www.wongnai.com/articles/exercise-listing?ref=ct",
          harf: "https://www.facebook.com/CleanFoodKitchenNakonpathom/",
        },
        {
          images:
            "https://onnitacademy.imgix.net/wp-content/uploads/2019/01/backopener.jpg",
          name: "About me",
          detail:
            "ผู้หญิงส่วนใหญ่ เมื่อเวลาอยากลดน้ำหนัก มักจะไปโฟกัสที่การออกกำลังลดแขน ลดขา ลดหน้าท้องให้กลับมาฟิตแอนด์เฟิร์ม แต่หลายคนอาจมองข้าม “เนื้อบริเวณแผ่นหลัง” กันไป ซึ่งหากมาออกกำลังกายสร้างกล้ามเนื้อบริเวณนี้ได้ นอกจากจะช่วยทำให้สาวๆ ดูหุ่นเฟิร์มมากยิ่งขึ้น เวลามีใครมองจากด้านหลังก็ไม่ต้องกังวล ก็ดูเป๊ะ ฟิตสุดๆ แล้ว ยังเป็นอีกวิธีที่ช่วยทำให้น้ำหนักลดลงได้ด้วยนะ ว่าแล้ววันนี้เลยขน 5 ท่าออกกำลังกาย บอกลาลำตัวหนาๆ มาสร้างกล้ามเนื้อหลังให้ฟิตเฟิร์มมาฝากให้เพื่อนๆ ได้ทำกันดู มาดูกันดีกว่าว่ามีท่าอะไรบ้าง",
          harf: "https://www.facebook.com/profile.php?id=100009560280771",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container" style={{ marginBottom: 100 }}>
        {this.state.listdatas.map((lists, key) => {
          return (
            <a
              href={lists.harf}
              key={key}
              className="d-flex align-items-center"
              style={{
                marginTop: 20,
                marginRight: "auto",
                marginLeft: "auto",
                backgroundColor: "#cbe6c3",
                borderRadius: 50,
                textDecoration: "none",
                maxWidth: 512,
              }}
            >
              <div className="flex-shrink-0">
                <div
                  style={{
                    width: 100,
                    height: 100,
                    backgroundImage: `url(${lists.images})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: 50,
                  }}
                />
              </div>
              <div
                style={{
                  margin: "auto",
                  width: "70%",
                  textAlign: "center",
                  color: "black",
                }}
              >
                <h5>{lists.name}</h5>
                <h4
                  className="text-nowrap"
                  style={{
                    margin: "auto",
                    width: "60%",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    fontSize: 18,
                  }}
                >
                  {lists.detail}
                </h4>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Listmenu;
