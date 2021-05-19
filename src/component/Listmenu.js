import React, { Component } from "react";

export class Listmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listdatas: [
        {
          images:
            "https://image.shutterstock.com/image-photo/strong-athletic-man-showing-muscular-260nw-392665192.jpg",
          name: "test1",
          detail: "Ok detail is good you can creact list data ",
        },
        {
          images:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpmLBLWZDA6FOi7FNrmx-qZ3xaEHWcEjPY7YdrT-xNnx75aMeqaEMCiKXtdfE2NuaKLpw&usqp=CAU",
          name: "test2",
          detail: "Ok detail is good you can creact list data ",
        },
        {
          images:
            "https://betterme.world/articles/wp-content/uploads/2020/06/shutterstock_392510389-1024x557.jpg",
          name: "test3",
          detail: "Ok detail is good you can creact list data ",
        },
        {
          images:
            "https://onnitacademy.imgix.net/wp-content/uploads/2019/01/backopener.jpg",
          name: "test4",
          detail: "Ok detail is good you can creact list data ",
        },
        {
          images:
            "https://qph.fs.quoracdn.net/main-qimg-b62d0bdece0e861d249f892d01c9754b",
          name: "test5",
          detail: "Ok detail is good you can creact list data ",
        },
      ],
    };
  }
  render() {
    return (
      <div className="container col-12 ">
        {this.state.listdatas.map((lists, key) => {
          return (
            <div
              key={key}
              className="d-flex align-items-center"
              style={{ marginTop: 20, backgroundColor: "dimgray" }}
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
                  }}
                />
              </div>
              <div
                style={{
                  margin: "auto",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <h5>{lists.name}</h5>
                <div
                  className="badge bg-primary text-wrap"
                  style={{
                    width: "60%",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {lists.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Listmenu;
