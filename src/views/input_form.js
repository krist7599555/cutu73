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
    label: "เพศ",
    type: "select",
    value: ["ชาย", "หญิง"]
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
    type: "text"
  },
  {
    label: "Line ID",
    type: "text"
  },
  // {
  //   label: "lineID",
  //   type: "text"
  // },
  // {
  //   label: "facebook",
  //   type: "text"
  // },
  // {
  //   label: "instagram",
  //   type: "text"
  // },
  {
    type: "br"
  },
  {
    label: "ฝ่าย",
    type: "select",
    value: [
      "ผู้เข้าร่วมงาน",
      "บัตรและอุปกรณ์",
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
    label: "หอใน",
    type: "checkbox",
    value: ["ไม่อยู่", "อยู่"]
  }
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
];
