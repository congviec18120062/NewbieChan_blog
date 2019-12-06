Để mình tóm tắt sơ qua về Kỳ 1:

- Giới thiệu sơ về **Selector** (_rất rất rất là sơ luôn, có lẻ mình nên nói kĩ hơn trong một bài viết hoăc hơn sắp tới_)
- Giới thiệu về problem khi _anh da vàng_, _anh da đen_ và _anh da trắng_ tới cùng lúc cố ấy sẽ chọn ai :)

## Specificity trong CSS ? và những điều bạn cần biết

> **Specificity** is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS Selectors.
>
> -MDN-

Theo mình hiểu thì đây là một qui tắc để sắp xếp các CSS selector.

Cụ thể hơn ta chia thành 3 loại chính sau theo qui tắc tăng đần mức độ ưu tiên

1. **Type selectors**, **Pseudo element**
2. **Class selectors**, **Attributes selector**, **Pseudo classes**
3. **ID selector**

Chú ý _, _>, ~, , +\*: không ảnh hưởng tới chỉ số ưu tiên của selector

Chỉ số ưu tiên cơ bản có dạng: a-b-c.

Để so sánh hai selector S1, S2 có có chỉ số a-b-c và d-e-f thì ta dùng qui tắc nhau sau:

Nếu a > d thì S1 > S2.

Nếu a = d và b > e thì S1 > S2.

Nếu a = d, b = e và c > f thì S1 > S2.

Trường hợp khi a = d, b = e và c = f thì ta xem selector viết sau trong file css thì sẽ lớn hơn.

[SpeciFishity](https://specifishity.com/)

Ở trên ta đã nhìn thấy cách tính điểm của Specificity một cách rất chi tiết vậy để kiểm tra xem ta đã hiểu rõ tới đâu thì chúng ta cùng tính thử điểm trong đoạn code sau.

```html
<div class="anh-da-vang" id="anh-da-do">
  <p class="anh-da-trang anh-da-trang-2" id="anh-da-den">
    "Chọn con tim hay là nghe lý trí"
  </p>
</div>
```

```css
p {
  color: black;
}

.anh-da-trang {
  color: white;
}

#anh-da-den {
  color: blue;
}

div p {
  color: yellow;
}

div .anh-da-trang {
  color: pink;
}

div .anh-da-trang-2 {
  color: brown;
}

#anh-da-do p {
  color: red;
}

#anh-da-do #anh-da-den {
  color: green;
}
```

_p_: 0-0-1 (do là một Type selector)

_.anh-da-trang_: 0-1-0 (do là một Class selector)

_#anh-da-den_: 1-0-0 (do là một ID selector)

_div p_: 0-0-2 (do gồm hai Type selectors)

_div .anh-da-trang_: 0-1-1 (do gồm một Type selector và môt Class selector)

_div .anh-da-trang-2_: 0-1-1 (do gồm một Type selector và môt Class selector)

_#anh-da-do p_: 1-0-1 (do gồm một ID selector và một Type selector)

_#anh-da-do #anh-da-den_: 2-0-0 (do gồm hai ID selectors)

Vậy giờ ta sắp xếp các chỉ số theo từ tự tăng đần:

0-0-1 < 0-0-2 < 0-1-0 < 0-1-1 < 0-1-1 < 1-0-0 < 1-0-1 < 2-0-0

_p_ < _div p_ < _.anh-da-trang_ < _div .anh-da-trang_ < _div .anh-da-trang-2_ < _#anh-da-den_

< _#anh-da-do p_ < _#anh-da-do #anh-da-den_.

Vậy kết quả là: _#anh-da-den_ có bố là _#anh-da-do_ chiến thắng cô gái và chuyển màu cô gái thành màu xanh lá @@.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="congviec18120062" data-slug-hash="PooYrmQ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="specificity ss2 ">
  <span>See the Pen <a href="https://codepen.io/congviec18120062/pen/PooYrmQ">
  specificity ss2 </a> by Nguyễn Hoàng Nam (<a href="https://codepen.io/congviec18120062">@congviec18120062</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**Kết luận sương sương**

**Thứ nhất**: Nhiều cá mập bạn sẽ thắng :)

**Thứ hai**: Anh da den có bố là anh da đỏ sẽ chiến thắng

Nhưng cuộc chiến chưa kết thúc được các bạn do anh da trắng có rất nhiều tiền vì vậy các bạn hay đọc trong kỳ 3 để biết thêm về drama này nha.

```html
<div class="anh-da-vang" id="anh-da-do">
  <p class="anh-da-trang anh-da-trang-2" id="anh-da-den">
    "Chọn con tim hay là nghe lý trí"
  </p>
</div>
```

```css
.anh-da-trang {
  color: white !important;
}

#anh-da-do #anh-da-den {
  color: green;
}
```

**Tài liệu tham khảo**

1. [Specificity (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
