import * as React from "react";

const Listsection = (props) => {
  // console.log(props);
  return (
    <div style={{ backgroundColor: "#FF6347", textAlign: "left" }}>
      {props.data && props.data.length > 0 ? (
        props.data.map((ele, index) => {
          return (
            <div key={ele.name + index}>
              <p
                style={{
                  textDecoration: ele.status === true ? "line-through" : ""
                }}
              >
                {index + 1}:{ele.name.toUpperCase()}
                &nbsp;
                <img
                  src={
                    "https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png"
                  }
                  alt="Edit Delete Icon Png - Download Delete Icon Png PNG Image | Transparent PNG  Free Download on SeekPNG"
                  style={{
                    width: 20,
                    height: 20,
                    float: "right",
                    marginLeft: 10
                  }}
                  onClick={() => props.datadelete(index)}
                />
                {ele.status === true ? (
                  <img
                    src="https://image.pngaaa.com/706/896706-middle.png"
                    alt="Basics Fanon Wiki - Internet Explorer Stop Icon Png,Delete Png - free transparent  png images - pngaaa.com"
                    style={{ width: 20, height: 20, float: "right" }}
                    onClick={() => props.dataRemove(index)}
                  />
                ) : (
                  <img
                    src={
                      "https://png.pngtree.com/png-clipart/20191017/ourmid/pngtree-3d-green-check-icon-png-image_1772786.jpg"
                    }
                    alt="Tick PNG Images | Vector and PSD Files | Free Download on Pngtree"
                    style={{ width: 20, height: 20, float: "right" }}
                    onClick={() => props.dataRemove(index)}
                  />
                )}
              </p>
            </div>
          );
        })
      ) : (
        <p>No items in the list</p>
      )}
    </div>
  );
};

export default Listsection;

// if(index <= 1)
//             return (
//               <p>
//                 {index} - {ele}
//               </p>
//             )
//           else
//               return null
// && ---> and
// || ---> or

//s
