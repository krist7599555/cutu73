import _ from "lodash";

const defaultConfig = {
  width: 600,
  height: 600,
  distord: false,
  type: "image/jpeg"
};

export default function blobImageResize(blob, option) {
  const { width, height, distord, type } = _.assign(
    {},
    defaultConfig,
    option || {}
  );
  const blob1str = `in ${blob.size} out`;
  const blobURL = (window.URL || window.webkitURL).createObjectURL(blob);
  const img = new Image();

  img.src = blobURL;
  return new Promise((resolve, reject) => {
    img.onload = () => {
      let [w, h] = [img.width, img.height];
      if (!distord) {
        if (w > width) {
          let scale = width / w;
          w *= scale;
          h *= scale;
        }
        if (h > height) {
          let scale = height / h;
          w *= scale;
          h *= scale;
        }
      } else {
        w = width;
        h = height;
      }

      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const context = canvas.getContext("2d");
      context.drawImage(img, 0, 0, w, h);
      context.canvas.toBlob(
        outblob => {
          // console.log(
          //   `compress: in ${blob.size} out ${outblob.size} [${blob.type} => ${
          //     outblob.type
          //   }]`
          // );
          resolve(outblob);
        },
        type,
        1
      );
    };
  });
}
