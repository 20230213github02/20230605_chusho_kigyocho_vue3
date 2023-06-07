
<template>
  <div class="base1">
    <div class="table-header">個人情報申請</div>
    <table class="applyAll">
      <tr>
        <td class="short-cell">申請情報登録日<span class="note">必须</span></td>
        <td class="td-2">{{ now }}</td>
      </tr>
      <tr>
        <td class="short-cell">申請者名</td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLShinseisyaName"
            @input="validateInput"
          /><span class="error-message" v-if="isNameTooLong"
            >50文字以内の申請者名を入力してください</span
          ><span class="error-message" v-if="isNameworry"
            >漢字を入力ください</span
          >
        </td>
      </tr>

      <tr>
        <td class="short-cell">住所</td>
        <td class="td-2">
          〒&nbsp;&nbsp;<input
            type="text "
            v-model="aPLAddressYubinNo3"
            @input="validateZipCodeAndAddress"
            style="width: 50px;border-radius: 6px;
              border-color: rgb(240, 79, 79);
            "
            maxlength="3"
          />&nbsp;&nbsp;-&nbsp;&nbsp;<input
            type="text"
            v-model="aPLAddressYubinNo4"
            @input="validateZipCodeAndAddress"
            style="width: 50px"
            maxlength="4"
          /><span
            class="error-message"
            v-if="aPLAddressYubinNo3worry || aPLAddressYubinNo4worry"
            >正しい郵便番号を入力してください</span
          >
          <br /><br />
          <el-button type="primary" class="addressbutton" @click="fetchAddress"
            >住所情報の取得</el-button
          >
          <br /><br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;都道府県
            <select v-model="aPLAddressTodofuken" class="addressselect">
              <option value="">選択してください</option>
              <option value="北海道">北海道</option>
              <option value="青森県">青森県</option>
              <option value="岩手県">岩手県</option>
              <option value="宮城県">宮城県</option>
              <option value="秋田県">秋田県</option>
              <option value="山形県">山形県</option>
              <option value="福島県">福島県</option>
              <option value="茨城県">茨城県</option>
              <option value="栃木県">栃木県</option>
              <option value="群馬県">群馬県</option>
              <option value="埼玉県">埼玉県</option>
              <option value="千葉県">千葉県</option>
              <option value="東京都">東京都</option>
              <option value="神奈川県">神奈川県</option>
              <option value="新潟県">新潟県</option>
              <option value="富山県">富山県</option>
              <option value="石川県">石川県</option>
              <option value="福井県">福井県</option>
              <option value="山梨県">山梨県</option>
              <option value="長野県">長野県</option>
              <option value="岐阜県">岐阜県</option>
              <option value="静岡県">静岡県</option>
              <option value="愛知県">愛知県</option>
              <option value="三重県">三重県</option>
              <option value="滋賀県">滋賀県</option>
              <option value="京都府">京都府</option>
              <option value="大阪府">大阪府</option>
              <option value="兵庫県">兵庫県</option>
              <option value="奈良県">奈良県</option>
              <option value="和歌山県">和歌山県</option>
              <option value="鳥取県">鳥取県</option>
              <option value="島根県">島根県</option>
              <option value="岡山県">岡山県</option>
              <option value="広島県">広島県</option>
              <option value="山口県">山口県</option>
              <option value="徳島県">徳島県</option>
              <option value="香川県">香川県</option>
              <option value="愛媛県">愛媛県</option>
              <option value="高知県">高知県</option>
              <option value="福岡県">福岡県</option>
              <option value="佐賀県">佐賀県</option>
              <option value="長崎県">長崎県</option>
              <option value="熊本県">熊本県</option>
              <option value="大分県">大分県</option>
              <option value="宮崎県">宮崎県</option>
              <option value="鹿児島県">鹿児島県</option>
              <option value="沖縄県">沖縄県</option>
            </select>
          </div>
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;市区町村
            <input
              type="text"
              v-model="aPLAddressShikuchoson"
              @input="aPLAddressShikuchosonInput"
            />
            <span class="error-message" v-if="aPLAddressShikuchosonworry"
              >正しい市区町村を入力してください</span
            >
          </div>
          <br />
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字番地等
            <input
              type="text"
              v-model="aPLAddressBanchi"
              @input="aPLAddressBanchiInput"
            />
            <span class="error-message" v-if="aPLAddressBanchiworry"
              >正しい字番地等を入力してください</span
            >
          </div>
          <br />
          <div>
            都道府県カナ
            <input
              type="text"
              v-model="aPLAddressTodofukenKana"
              @input="aPLAddressTodofukenKanaInput"
            />
            <span class="error-message" v-if="aPLAddressTodofukenKanaworry"
              >正しい都道府県カナを入力してください</span
            >
          </div>
          <br />
          <div>
            市区町村カナ
            <input
              type="text"
              v-model="aPLAddressShikuchosonKana"
              @input="aPLAddressShikuchosonKanaInput"
            />
            <span class="error-message" v-if="aPLAddressShikuchosonKanaworry"
              >正しい市区町村カナを入力してください</span
            >
          </div>
          <br />
          <div>
            字番地等カナ
            <input
              type="text"
              v-model="aPLAddressBanchiKana"
              @input="aPLAddressBanchiKanaInput"
            />
            <span class="error-message" v-if="aPLAddressBanchiKanaworry"
              >正しい市区町村カナを入力してください</span
            >
          </div>
          <br />
          <div>
            マンション名
            <input
              type="text"
              v-model="aPLAddressManshon"
              @input="aPLAddressManshonInput"
            />
            <span class="error-message" v-if="aPLAddressManshonworry"
              >正しいマンション名を入力してください</span
            >
          </div>
        </td>
      </tr>

      <tr>
        <td class="short-cell">代表者の役職</td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLDaihyoshaYakushoku"
            @input="aPLDaihyoshaYakushokuInput"
          />
          <span class="error-message" v-if="aPLDaihyoshaYakushokuworry"
            >正しい代表者の役職を入力してください</span
          >
        </td>
      </tr>

      <tr>
        <td class="short-cell">代表者の氏名</td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLDaihyoshaName"
            @input="aPLDaihyoshaNameInput"
          />
          <span class="error-message" v-if="aPLDaihyoshaNameworry"
            >正しい代表者の氏名を入力してください</span
          >
        </td>
      </tr>

      <tr>
        <td class="short-cell">法人番号</td>
        <td class="td-2">
          <input type="text" v-model="aPLHojinNo" @input="aPLHojinNoInput" />
          <span class="error-message" v-if="aPLHojinNoworry"
            >正しい法人番号を入力してください</span
          >
        </td>
      </tr>

      <tr>
        <td class="short-cell">担当者の氏名</td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLTantoshaName"
            @input="aPLTantoshaNameInput"
          />
          <span class="error-message" v-if="aPLTantoshaNameworry"
            >正しい担当者の氏名を入力してください</span
          >
        </td>
      </tr>

      <tr>
        <td class="short-cell">電話番号</td>
        <td class="td-2">
          <input type="text" v-model="aPLCSTEL" @input="aPLCSTELInput" />
          <span class="error-message" v-if="aPLCSTELworry"
            >正しい電話番号を入力してください</span
          >
        </td>
      </tr>

      <tr>
        <td class="short-cell">FAX番号</td>
        <td class="td-2">
          <input type="text" v-model="aPLCSFAX" @input="aPLCSFAXInput" />
          <span class="error-message" v-if="aPLCSFAXworry"
            >正しいFAX番号を入力してください</span
          >
        </td>
      </tr>

      <tr>
        <td class="short-cell">担当者メールアドレス</td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLCSTantoshaMail"
            @input="aPLCSTantoshaMailInput"
          />
          <span class="error-message" v-if="aPLCSTantoshaMailworry"
            >正しい担当者メールアドレスを入力してください</span
          >
        </td>
      </tr>

      <tr>
        <td class="short-cell">確認用メールアドレス</td>
        <td class="td-2">
          <input
            type="text"
            v-model="aPLCSKakuninyoMail"
            @input="aPLCSKakuninyoMailInput"
          />
          <span class="error-message" v-if="aPLCSKakuninyoMailworry"
            >メールアドレスは担当者と一致してください</span
          >
        </td>
      </tr>
    </table>
    <br /><br />
    <div class="UserBtn">
      <el-button type="info" @click="goBack">戻る</el-button>
      <el-button type="warning" @click="save">一時保存</el-button>
      <el-button type="success" @click="makesure">確認内容</el-button>
      <!-- <el-button type="info" @click="clear"></el-button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserApply",
  data() {
    return {
      now: "", //当前日期
      aPLShinseisyaName: "",
      aPLAddressYubinNo3: "",
      aPLAddressYubinNo4: "",
      aPLAddressTodofuken: "",
      aPLAddressShikuchoson: "",
      aPLAddressBanchi: "",
      aPLAddressTodofukenKana: "",
      aPLAddressShikuchosonKana: "",
      aPLAddressBanchiKana: "",
      aPLAddressManshon: "",
      aPLDaihyoshaYakushoku: "",
      aPLDaihyoshaName: "",
      aPLHojinNo: "",
      aPLTantoshaName: "",
      aPLCSTEL: "",
      aPLCSFAX: "",
      aPLCSTantoshaMail: "",
      aPLCSKakuninyoMail: "",
      isNameworry: false,
      isNameTooLong: false,
      aPLAddressShikuchosonworry: false,
      aPLAddressBanchiworry: false,
      aPLAddressYubinNo3worry: false,
      aPLAddressYubinNo4worry: false,
      aPLAddressTodofukenKanaworry: false,
      aPLAddressShikuchosonKanaworry: false,
      aPLAddressBanchiKanaworry: false,
      aPLAddressManshonworry: false,
      aPLDaihyoshaYakushokuworry: false,
      aPLDaihyoshaNameworry: false,
      aPLHojinNoworry: false,
      aPLTantoshaNameworry: false,
      aPLCSTELworry: false,
      aPLCSFAXworry: false,
      aPLCSTantoshaMailworry: false,
      aPLCSKakuninyoMailworry: false,
    };
  },
  mounted() {
    // 获取当前日期
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    this.now = `${year}-${month}-${day}`;
    const savedData = sessionStorage.getItem('formData');
    if (savedData) {
    const formData = JSON.parse(savedData);
    this.aPLShinseisyaName = formData.aPLShinseisyaName;
    this.aPLAddressYubinNo3 = formData.aPLAddressYubinNo3;
    this.aPLAddressYubinNo4 = formData.aPLAddressYubinNo4;
    this.aPLAddressTodofuken = formData.aPLAddressTodofuken;
    this.aPLAddressShikuchoson = formData.aPLAddressShikuchoson;
    this.aPLAddressBanchi = formData.aPLAddressBanchi;
    this.aPLAddressTodofukenKana = formData.aPLAddressTodofukenKana;
    this.aPLAddressShikuchosonKana = formData.aPLAddressShikuchosonKana;
    this.aPLAddressBanchiKana = formData.aPLAddressBanchiKana;
    this.aPLAddressManshon = formData.aPLAddressManshon;
    this.aPLDaihyoshaYakushoku = formData.aPLDaihyoshaYakushoku;
    this.aPLDaihyoshaName = formData.aPLDaihyoshaName;
    this.aPLHojinNo = formData.aPLHojinNo;
    this.aPLTantoshaName = formData.aPLTantoshaName;
    this.aPLCSTEL = formData.aPLCSTEL;
    this.aPLCSFAX = formData.aPLCSFAX;
    this.aPLCSTantoshaMail = formData.aPLCSTantoshaMail;
    this.aPLCSKakuninyoMail = formData.aPLCSKakuninyoMail;
    // 其他数据属性...
  }
  },

  methods: {
  //   clear() {
  //   // 清除缓存数据
  //   sessionStorage.removeItem('formData');
    
  //   // 输出清除成功的提示
  //   console.log('数据已清除');
  // },
  
    goBack() {
      this.$router.push('/user');
    },
    save() {
      const formData = {
        now:this.now,
        aPLShinseisyaName: this.aPLShinseisyaName,
        aPLAddressYubinNo3: this.aPLAddressYubinNo3,
        aPLAddressYubinNo4: this.aPLAddressYubinNo4,
        aPLAddressTodofuken: this.aPLAddressTodofuken,
        aPLAddressShikuchoson: this.aPLAddressShikuchoson,
        aPLAddressBanchi: this.aPLAddressBanchi,
        aPLAddressTodofukenKana: this.aPLAddressTodofukenKana,
        aPLAddressShikuchosonKana: this.aPLAddressShikuchosonKana,
        aPLAddressBanchiKana: this.aPLAddressBanchiKana,
        aPLAddressManshon: this.aPLAddressManshon,
        aPLDaihyoshaYakushoku: this.aPLDaihyoshaYakushoku,
        aPLDaihyoshaName: this.aPLDaihyoshaName,
        aPLHojinNo: this.aPLHojinNo,
        aPLTantoshaName: this.aPLTantoshaName,
        aPLCSTEL: this.aPLCSTEL,
        aPLCSFAX: this.aPLCSFAX,
        aPLCSTantoshaMail: this.aPLCSTantoshaMail,
        aPLCSKakuninyoMail: this.aPLCSKakuninyoMail,
      };
      const dataString = JSON.stringify(formData);
      
      // 使用 localStorage 进行本地保存
      sessionStorage.setItem('formData', dataString);
      
      // 输出保存成功的提示
      console.log('数据保存成功');
    },
    makesure() {
  // Check if all inputs are entered correctly
  if (
    !this.aPLShinseisyaNameworry &&
    !this.aPLAddressYubinNo3worry &&
    !this.aPLAddressYubinNo4worry &&
    !this.aPLAddressTodofukenworry &&
    !this.aPLAddressShikuchosonworry &&
    !this.aPLAddressBanchiworry &&
    !this.aPLAddressTodofukenKanaworry &&
    !this.aPLAddressShikuchosonKanaworry &&
    !this.aPLAddressBanchiKanaworry &&
    !this.aPLAddressManshonworry &&
    !this.aPLDaihyoshaYakushokuworry &&
    !this.aPLDaihyoshaNameworry &&
    !this.aPLHojinNoworry &&
    !this.aPLTantoshaNameworry &&
    !this.aPLCSTELworry &&
    !this.aPLCSFAXworry &&
    !this.aPLCSTantoshaMailworry &&
    !this.aPLCSKakuninyoMailworry&&
    this.aPLShinseisyaName.trim() !== '' &&
    this.aPLAddressYubinNo3.trim() !== '' &&
    this.aPLAddressYubinNo4.trim() !== '' &&
    this.aPLAddressTodofuken.trim() !== '' &&
    this.aPLAddressShikuchoson.trim() !== '' &&
    this.aPLAddressBanchi.trim() !== '' &&
    this.aPLAddressTodofukenKana.trim() !== '' &&
    this.aPLAddressShikuchosonKana.trim() !== '' &&
    this.aPLAddressBanchiKana.trim() !== '' &&
    this.aPLAddressManshon.trim() !== '' &&
    this.aPLDaihyoshaYakushoku.trim() !== '' &&
    this.aPLDaihyoshaName.trim() !== '' &&
    this.aPLHojinNo.trim() !== '' &&
    this.aPLTantoshaName.trim() !== '' &&
    this.aPLCSTantoshaMail.trim() !== '' &&
    this.aPLCSKakuninyoMail.trim() !== ''
  ) {
    this.save();

    // All inputs are entered correctly, navigate to '/makesuer' route
    this.$router.push('/makesure');
  } else {
    // Show an error message or perform any other action for incomplete inputs
    console.log('Please fill in all inputs correctly');
    this.$message.error('内容を全部入力してください。');
  }
},
    validateInput() {
      const name = this.aPLShinseisyaName;
      const kanjiRegex = /^[\u4E00-\u9FAF]+$/;

      if (name.length > 50) {
        this.isNameTooLong = true;
      } else {
        this.isNameTooLong = false;
      }

      if (!kanjiRegex.test(name)) {
        this.isNameworry = true;
      } else {
        this.isNameworry = false;
      }
    },
    // validateZipCode() {
    //   const pattern = /^\d{1,3}$/;
    //   if (
    //     !pattern.test(this.aPLAddressYubinNo3) ||
    //     this.aPLAddressYubinNo3.length !== 3
    //   ) {
    //     this.aPLAddressYubinNo3worry = true;
    //   } else {
    //     this.aPLAddressYubinNo3worry = false;
    //   }
    // },
    // validateAddress() {
    //   const pattern = /^\d{1,4}$/;
    //   if (
    //     !pattern.test(this.aPLAddressYubinNo4) ||
    //     this.aPLAddressYubinNo4.length !== 4 
    //   ) {
    //     this.aPLAddressYubinNo4worry = true;
    //   } else {
    //     this.aPLAddressYubinNo4worry = false;
    //   }
    // },
    validateZipCodeAndAddress(){
      const pattern1 = /^\d{3}$/;
      const pattern2 = /^\d{4}$/;
      this.aPLAddressYubinNo3worry =!pattern1.test(this.aPLAddressYubinNo3); 
      this.aPLAddressYubinNo4worry = !pattern2.test(this.aPLAddressYubinNo4);

      
    },
    fetchAddress() {
      if (this.aPLAddressYubinNo3 && this.aPLAddressYubinNo4) {
        const zipCode = this.aPLAddressYubinNo3 + this.aPLAddressYubinNo4;
        axios
          .get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipCode}`)
          .then((response) => {
            const data = response.data;
            if (
              data.status === 200 &&
              data.results &&
              data.results.length > 0
            ) {
              const address = data.results[0];
              this.aPLAddressTodofuken = address.address1;
              this.aPLAddressShikuchoson = address.address2;
              this.aPLAddressBanchi = address.address3;
              this.aPLAddressTodofukenKana = address.kana1;
              this.aPLAddressShikuchosonKana = address.kana2;
              this.aPLAddressBanchiKana = address.kana3;
            } else {
              // 处理地址未找到的情况
            }
          })
          .catch((error) => {
            console.log(error);
            // 处理错误情况
          });
      }
    },
    aPLAddressShikuchosonInput() {
      if (this.aPLAddressShikuchoson.length > 40) {
        this.aPLAddressShikuchosonworry = true;
      } else {
        this.aPLAddressShikuchosonworry = false;
      }
    },
    aPLAddressBanchiInput() {
      if (this.aPLAddressBanchi.length > 255) {
        this.aPLAddressBanchiworry = true;
      } else {
        this.aPLAddressBanchiworry = false;
      }
    },
    aPLAddressTodofukenKanaInput() {
      const kanaRegex = /^[ァ-ヶｦ-ﾟ]+$/;
      if (this.aPLAddressTodofukenKana.length > 50) {
        this.aPLAddressTodofukenKanaworry = true;
      } else {
        this.aPLAddressTodofukenKanaworry = false;
      }

      if (!kanaRegex.test(this.aPLAddressTodofukenKana)) {
        this.aPLAddressTodofukenKanaworry = true;
      } else {
        this.aPLAddressTodofukenKanaworry = false;
      }
    },
    aPLAddressShikuchosonKanaInput() {
      const kanaRegex = /^[ァ-ヶｦ-ﾟ]+$/;
      if (this.aPLAddressShikuchosonKana.length > 255) {
        this.aPLAddressShikuchosonKanaworry = true;
      } else {
        this.aPLAddressShikuchosonKanaworry = false;
      }

      if (!kanaRegex.test(this.aPLAddressShikuchosonKana)) {
        this.aPLAddressShikuchosonKanaworry = true;
      } else {
        this.aPLAddressShikuchosonKanaworry = false;
      }
    },
    aPLAddressBanchiKanaInput() {
      const kanaRegexsu = /^[ァ-ヶｦ-ﾟー－0-9]+$/;
      if (this.aPLAddressBanchiKana.length > 255) {
        this.aPLAddressBanchiKanaworry = true;
      } else {
        this.aPLAddressBanchiKanaworry = false;
      }

      if (!kanaRegexsu.test(this.aPLAddressBanchiKana)) {
        this.aPLAddressBanchiKanaworry = true;
      } else {
        this.aPLAddressBanchiKanaworry = false;
      }
    },
    aPLAddressManshonInput() {
      const kanaRegexsukan = /^[ぁ-んァ-ヶｦ-ﾟー－一-龠々0-9０-９]+$/;
      if (this.aPLAddressManshon.length > 255) {
        this.aPLAddressManshonworry = true;
      } else {
        this.aPLAddressManshonworry = false;
      }

      if (!kanaRegexsukan.test(this.aPLAddressManshon)) {
        this.aPLAddressManshonworry = true;
      } else {
        this.aPLAddressManshonworry = false;
      }
    },
    aPLDaihyoshaYakushokuInput() {
      const kanaRegexsukane = /^[ぁ-んァ-ヶｦ-ﾟー－一-龠々a-zA-Z]+$/;
      if (this.aPLDaihyoshaYakushoku.length > 255) {
        this.aPLDaihyoshaYakushokuworry = true;
      } else {
        this.aPLDaihyoshaYakushokuworry = false;
      }

      if (!kanaRegexsukane.test(this.aPLDaihyoshaYakushoku)) {
        this.aPLDaihyoshaYakushokuworry = true;
      } else {
        this.aPLDaihyoshaYakushokuworry = false;
      }
    },
    aPLDaihyoshaNameInput() {
      const kanaRegexsukane = /^[一-龠々]+$/;
      if (this.aPLDaihyoshaName.length > 40) {
        this.aPLDaihyoshaNameworry = true;
      } else {
        this.aPLDaihyoshaNameworry = false;
      }

      if (!kanaRegexsukane.test(this.aPLDaihyoshaName)) {
        this.aPLDaihyoshaNameworry = true;
      } else {
        this.aPLDaihyoshaNameworry = false;
      }
    },
    aPLHojinNoInput() {
      const kanaRegexsukane = /^[0-9a-zA-Z]+$/;
      if (this.aPLHojinNo.length > 13) {
        this.aPLHojinNoworry = true;
      } else {
        this.aPLHojinNoworry = false;
      }

      if (!kanaRegexsukane.test(this.aPLHojinNo)) {
        this.aPLHojinNoworry = true;
      } else {
        this.aPLHojinNoworry = false;
      }
    },
    aPLTantoshaNameInput() {
      const kanaRegexsukane = /^[一-龠々]+$/;
      if (this.aPLTantoshaName.length > 255) {
        this.aPLTantoshaNameworry = true;
      } else {
        this.aPLTantoshaNameworry = false;
      }

      if (!kanaRegexsukane.test(this.aPLTantoshaName)) {
        this.aPLTantoshaNameworry = true;
      } else {
        this.aPLTantoshaNameworry = false;
      }
    },
    aPLCSTELInput() {
      const kanaRegexsukane = /^[0-9]+$/;
      if (this.aPLCSTEL.length > 0) {
        if (this.aPLCSTEL.length > 11) {
          this.aPLCSTELworry = true;
        } else {
          this.aPLCSTELworry = !kanaRegexsukane.test(this.aPLCSTEL);
        }
      } else {
        this.aPLCSTELworry = false;
      }
    },
    aPLCSFAXInput() {
      const kanaRegexsukane = /^[0-9]+$/;
      if (this.aPLCSFAX.length > 0) {
        if (this.aPLCSFAX.length > 11) {
          this.aPLCSFAXworry = true;
        } else {
          this.aPLCSFAXworry = !kanaRegexsukane.test(this.aPLCSFAX);
        }
      } else {
        this.aPLCSFAXworry = false;
      }
    },
    aPLCSTantoshaMailInput() {
      const mail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.aPLCSTantoshaMail.length > 0) {
        if (this.aPLCSTantoshaMail.length > 255) {
          this.aPLCSTantoshaMailworry = true;
        } else {
          this.aPLCSTantoshaMailworry = !mail.test(this.aPLCSTantoshaMail);
        }
      } else {
        this.aPLCSTantoshaMailworry = false;
      }
    },
    aPLCSKakuninyoMailInput() {
      if (this.aPLCSKakuninyoMail !== this.aPLCSTantoshaMail) {
        this.aPLCSKakuninyoMailworry = true;
      } else {
        this.aPLCSKakuninyoMailworry = false;
      }
    },
  },
};
</script>

<style>
.base1 {
  overflow: auto;
  height: 105vh;
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  /* justify-content: center; 垂直方向居中对齐 */
  align-items: center; /* 水平方向居中对齐 */
  /* background-image: url("../assets/images/background.jpg"); */
  background-size: 100%;
}

.table-header {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
}
.applyAll {
  width: 60%;
  border-collapse: collapse;
  border-radius: 20px;
  overflow: hidden;
}
.applyAll tr:hover td {
  background-color: rgb(237, 109, 130); /* 鼠标悬停时的背景颜色 */
}
.applyAll th {
  padding: 8px;
  background-color: rgb(237, 109, 130);
}

.applyAll td {
  background-color: pink;
  border: 1px solid rgb(249, 245, 245);
  padding: 8px;
  margin: 4px;
}
.short-cell {
  width: 200px; /* 设置第一列的宽度 */
  text-align: left;
}
.td-2 {
  text-align: left;
}
.td-2 input[type="text"] {
  border-radius: 6px;
  border-color: rgb(240, 79, 79);
}
.note {
  margin-left: 55px; /* 添加间距 */
  font-size: xx-small;
  background: rgb(240, 79, 79);
  color: white;
  border-radius: 5px;
}
.error-message {
  color: rgb(61, 7, 88);
  margin-left: 30px;
}
.addressselect:focus {
  outline: none; /* 移除选择框的默认聚焦边框 */
  border-color: plum; /* 修改选择框的聚焦边框颜色 */
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
.addressselect {
  width: 180px;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #e75252;
  border-radius: 4px;
}
.UserBtn {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 设置容器高度为视窗的高度 */
  margin-left: 100px;
}

.UserBtn .el-button {
  width: 150px;
  margin-right: 100px; /* 设置按钮之间的右侧间距 */
}
.addressbutton {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto; /* 设置容器高度为视窗的高度 */
  margin-left: 30px;
  width: 100px;
  height: 10px;
}
</style>
