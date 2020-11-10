 - badge 的文字在字大圓小時，很容易看起來並不對齊. sentry 透過手動設定 px 來拉開 font-size 與 height 來做.
   - 但我們可以分兩個 tag, 只要設好行高跟垂直對齊. 就可以使用 font-size + em 來做
 - 下拉選單的 `項目` 跟 `輔助文字` 使用顏色深淺來做區隔, 而非字重.
   - sort by: *Last Seen*
 - 下拉選單與按鈕大小切齊 ( 若可以的話 )
 - side menu icon 置中, 所以才能 toggle on / off text
 - side menu active item 左方有一個凸起加強效果. 作用是?
 - flexbox 常有的 margin 問題, 他使用 css grid 設定 gap 來解決.
   - 要注意 css grid 在 IE 不會動, 但 IE(>10) 支援某種舊版的規格
     - https://medium.com/@elad/supporting-css-grid-in-internet-explorer-b38669e75d66
   - 範例:
     display: grid
     grid-template: repeat(3, minmax(100px,1fr))
     gap: 20px
