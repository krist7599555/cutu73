export default [
  // {
  //   label: "รูปภาพ",
  //   type: "image"
  // },
  {
    label: "คำนำหน้า",
    type: "radio",
    value: ["นาย", "นางสาว"]
  },
  {
    label: "ชื่อ",
    type: "disable"
  },
  {
    label: "สกุล",
    type: "disable"
  },
  {
    label: "ชื่อเล่น",
    type: "text"
  },
  {
    label: "เพศ",
    type: "select",
    value: ["ชาย", "หญิง"],
    icon: "venus-mars",
    iconpack: "fas"
  },
  {
    label: "รหัสนิสิต",
    type: "disable"
  },
  {
    label: "ชั้นปี",
    type: "disable"
  },
  {
    label: "คณะ",
    type: "disable"
  },
  {
    label: "รหัสคณะ",
    type: "disable"
  },
  {
    type: "br"
  },
  {
    type: "br"
  },
  // {
  //   label: "วันเกิด",
  //   type: "date"
  // },
  {
    label: "เบอร์โทร",
    type: "tel",
    icon: "phone"
  },
  {
    label: "line-ID",
    type: "text",
    icon: "line",
    iconpack: "fab"
  },
  {
    label: "facebook",
    type: "text",
    icon: "facebook",
    iconpack: "fab"
  },
  {
    label: "instagram",
    type: "text",
    icon: "instagram",
    iconpack: "fab"
  },
  {
    type: "br"
  },
  {
    label: "ฝ่าย",
    type: "select",
    value: [
      "ผู้เข้าร่วมงาน",
      "เสื้อ",
      "บัตร",
      "หนังสือ",
      "ATและทะเบียน",
      "ถ่ายภาพ",
      "วิทยุสื่อสาร",
      "สวัสดิการ",
      "สถานที่",
      "พยาบาล",
      "ประสาน กบจ.",
      "ประสานจุดนัดพบ",
      "ประสานขบวน",
      "หลบฝน",
      "ประธานจัดงาน",
      "รองประธานจัดงาน",
      "อำนวยการ 1",
      "อำนวยการ 2",
      "ประสาน",
      "เลขา",
      "เหรัญญิก"
    ]
  },
  {
    label: "ตำแหน่ง",
    type: "select",
    value: [
      "ประธานฝ่าย",
      "รองประธานฝ่าย",
      "เลขานุการฝ่าย",
      "เหรัญญิกฝ่าย",
      "รีครูท"
    ]
  },
  {
    label: "ขนาดเสื้อ",
    type: "select",
    icon: "tshirt",
    iconpack: "fas",
    value: [
      "S  อก 36 นิ้ว - ยาว 26 นิ้ว",
      "M  อก 38 นิ้ว - ยาว 27 นิ้ว",
      "L  อก 40 นิ้ว - ยาว 28 นิ้ว",
      "XL อก 42 นิ้ว - ยาว 29 นิ้ว"
    ]
  },
  {
    label: "หอใน",
    type: "checkbox",
    value: ["ไม่อยู่", "อยู่"]
  },
  // {
  //   label: "อาคาร",
  //   type: "text",
  //   show: "หอใน == 'อยู่'"
  // },
  // {
  //   label: "ห้อง",
  //   type: "text",
  //   show: "หอใน == 'อยู่'"
  // },
  // {
  //   label: "เตียง",
  //   type: "select",
  //   value: ["A", "B", "C", "D"],
  //   show: "หอใน == 'อยู่'"
  // }
  {
    label: "อาหารที่แพ้",
    type: "text",
    icon: "skull-crossbones",
    iconpack: "fas"
  },
  {
    label: "โรคประจำตัว",
    type: "text",
    icon: "pills",
    iconpack: "fas"
  },
  {
    label: "หมายเหตุ",
    type: "textarea"
  }
];
