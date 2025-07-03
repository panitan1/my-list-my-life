<template>
  <div class="headtop">
    <div class="eyeLine1L"></div>
    <div class="MaineyeL">
      <div class="ineyeL">
        <div class="makiL1">
          <div class="makiL2">
            <div class="makiL3">
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="eyeLineL"></div> 
    

    <div class="MaineyeR">
      <div class="ineyeR">
        <div class="makiR1">
          <div class="makiR2">
            <div class="makiR3">
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="eyeLineR"></div>
    <div class="box"></div>
  </div>
</template>

<script setup>
// ไม่ต้องใช้ script เพราะใช้ Vue 3 Composition API และไม่มี logic เพิ่มเติม
</script>

<style scoped>
.headtop {
  background: #f3cbb1; /* สีหน้าเหลืองสดใส */
  width: 150px;
  height: 150px;
  border-radius: 50%; /* วงกลมใหญ่สำหรับหน้า */
  position: relative; /* เพื่อให้ตาวางตำแหน่งสัมพันธ์กับ headtop */
  overflow: hidden;
  margin: 50px auto; /* เพิ่ม margin เพื่อให้อยู่กลางหน้าจอ */
}

.MaineyeL, .MaineyeR {
  background: #fff; /* สีตาขาว */
  width: 40px; /* ขนาดตา */
  height: 20px; /* ครึ่งวงกลมแนวตั้ง */
  border-radius: 40px 40px 0 0; /* ครึ่งวงกลมด้านบน ดูเหมือนตา */
  position: absolute; /* วางตำแหน่งตา */
  top: 50px; /* ปรับตำแหน่งแนวตั้ง */
  border: 1px solid #000; /* ขอบตา */
  overflow: hidden; /* ป้องกันตาดำล้นออกจากตาขาว */
  box-shadow: 
    inset 0 4px 8px rgba(0, 0, 0, 3), /* เงาด้านในเพื่อความลึก */
    0 2px 4px rgba(0, 0, 0, 3); /* เงาดด้านนอกเพื่อยกตาขึ้นเล็กน้อย */
}

.ineyeL, .ineyeR {
   box-shadow: 
    inset 0 4px 8px rgba(0, 0, 0, 3), /* เงาด้านในเพื่อความลึก */
    0 2px 4px rgba(0, 0, 0, 3); /* เงาดด้านนอกเพื่อยกตาขึ้นเล็กน้อย */
  background: #000; /* สีตาดำ */
  width: 33px; /* ขนาดตาดำ */
  height: 33px; /* วงกลมเล็ก ๆ สำหรับตาดำ */
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  position: absolute; /* วางตาดำสัมพันธ์กับตาขาว */
  overflow: hidden;
 
}
.ineyeL {
  left: 15px;
  position: absolute;
}

.ineyeR {
  left: -10px;
  position: absolute;
}
.makiL1 {
  box-shadow: 0 0 8px 4px rgba(244, 0, 0, 0.2);
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  border: 1px solid;
  background: none;
  border-color: #f40000;
  width: 20px; /* ขนาดตาดำ */
  height: 20px; /* วงกลมเล็ก ๆ สำหรับตาดำ */
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  position: absolute; /* วางตาดำสัมพันธ์กับตาขาว */

}

.makiL2 {
  box-shadow: 0 0 8px 4px rgba(244, 0, 0, 0.2);
   top: 50%; left: 50%; transform: translate(-50%, -50%);
  border: 1px solid;
  background: none;
  border-color: #f40000;
  width: 13px; /* ขนาดตาดำ */
  height: 13px; /* วงกลมเล็ก ๆ สำหรับตาดำ */
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  position: absolute; /* วางตาดำสัมพันธ์กับตาขาว */
  
}

.makiL3 {
  box-shadow: 0 0 8px 4px rgba(244, 0, 0, 0.2);
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  border: 1px solid;
  background: none;
  border-color: #f40000;
  width: 5px; /* ขนาดตาดำ */
  height: 5px; /* วงกลมเล็ก ๆ สำหรับตาดำ */
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  position: absolute; /* วางตาดำสัมพันธ์กับตาขาว */
  
}

.makiR1 {
  box-shadow: 0 0 8px 4px rgba(244, 0, 0, 0.2);
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  border: 1px solid;
  background: none;
  border-color: #f40000;
  width: 20px; /* ขนาดตาดำ */
  height: 20px; /* วงกลมเล็ก ๆ สำหรับตาดำ */
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  position: absolute; /* วางตาดำสัมพันธ์กับตาขาว */

}

.makiR2 {
  box-shadow: 0 0 8px 4px rgba(244, 0, 0, 0.2);
   top: 50%; left: 50%; transform: translate(-50%, -50%);
  border: 1px solid;
  background: none;
  border-color: #f40000;
  width: 13px; /* ขนาดตาดำ */
  height: 13px; /* วงกลมเล็ก ๆ สำหรับตาดำ */
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  position: absolute; /* วางตาดำสัมพันธ์กับตาขาว */
  
}

.makiR3 {
  box-shadow: 0 0 8px 4px rgba(244, 0, 0, 0.2);
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  border: 1px solid;
  background: none;
  border-color: #f40000;
  width: 5px; /* ขนาดตาดำ */
  height: 5px; /* วงกลมเล็ก ๆ สำหรับตาดำ */
  border-radius: 50%; /* ทำให้เป็นวงกลม */
  position: absolute; /* วางตาดำสัมพันธ์กับตาขาว */
  
}

.MaineyeL {
  left: 30px; /* ตาซ้าย */
}

.MaineyeR {
  right: 30px; /* ตาขวา */
}
.eyeLineL, .eyeLineR {
  position: absolute;
  top: 68px; /* ปรับให้อยู่ใต้ตา */
  width: 4px;
  height: 1px;
  background-color: rgb(0, 0, 0);
  border-radius: 100%;
  

}

.eyeLineL {
  left: 27px;
  border-bottom: none;
  transform: rotate(20deg); /* งอนขึ้นปลายขวา */
}

.eyeLineR {
  border-bottom: none;
  right: 27px;
  transform: rotate(-20deg); /* งอนขึ้นปลายซ้าย */
}
.box {
  right: 73px;
  position: absolute;
  top: 90px;
  width: 33px;
  height: 35px;
  border: solid 1px #000000;
  border-radius: 55px 0px;
  border-right: none;
  border-bottom: none ;/* แสดงเฉพาะครึ่งซ้าย */
  border-left: none ;
  transform: rotate(45deg); /* หมุน 45 องศา (ปรับองศาได้ตามต้องการ) */
  transform-origin: center; /* กำหนดจุดศูนย์กลางการหมุน */
  
}




</style>