<template>
  <div class="footer">
    <hr color="#888"/>
    <div>
      <span>{{ $t('footer.phone') }}</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>{{ $t('footer.email') }}</span>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span>{{ $t('footer.address') }}</span>
    </div>
    <div>{{ $t('footer.copyright') }}</div>
  </div>
</template>

<style lang="scss">
.footer {
  color: #888;
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-align: center;

  hr {
    margin-top: 20px;
    margin-bottom: 20px;

    border: 0;
    height:1px;
    background-color: #888;
  }
}
</style>
