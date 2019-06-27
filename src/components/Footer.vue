<i18n>
en:
  phone: "Phone: 010-80767807, 400-680-3200"
  email: "Email: service@syngen.tech"
  address: "Address: Region 7, Building 8, No. 20 Life Science Park Road, Huilongguan, Changping District, Beijing"
zh:
  phone: "联系热线：010-80767807, 400-680-3200"
  email: "服务邮箱：service@syngen.tech"
  address: "公司地址：北京市昌平区回龙观镇生命园路20号院8幢7号区域"
</i18n>

<template>
  <div class="footer">
    <hr>
    <div>
      <span>{{ $t('phone') }}</span>
      <span>{{ $t('email') }}</span>
      <span>{{ $t('address') }}</span>
    </div>
    <div>{{ $t('copyright') }}</div>
  </div>
</template>

<style lang="scss">
.footer {
  color: #888;
  font-size: 0.8rem;
  text-align: center;

  & > hr {
    margin-top: 20px;
    margin-bottom: 20px;

    border: 0;
    height: 1px;
    background-color: #888;
  }

  div { padding: 1px; }
  span { margin: 5px; }
}
</style>
