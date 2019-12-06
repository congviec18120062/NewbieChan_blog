Cách ít hack não nhất là:
Bước 1: Mở text editor
Bước 2: Live server đoạn code
Bước 3: Thử xem selector nào đang ưu tiên cao nhât :)

[Just Wait](https://giphy.com/gifs/colbertlateshow-stephen-colbert-wait-l0HlKrB02QY0f1mbm)

Hình như mình nhầm lẫn gì đó, thực ra thì các trên hoàn toàn đúng và mình vẫn dùng chúng khi không muốn suy nghĩ qua nhiều (_chúng ta có chrome dev tool để kiếm tra thử mà_). Nhưng trong bài viết nhỏ này mình sẽ nói về một phương pháp thần kì khác giúp ta ghi nhớ mức độ ưu tiên này.

## Nào chúng ta cùng điểm danh một số các selector mà chúng ta hay dùng

**Selector** là từ dùng để chỉ một hoăc một số element trong file html để thêm property trong file css

**Type selector**: Chọn các element theo tag

**Class selector**: Chọn các element có cùng class

**ID selector**: Chọn các element có cùng ID

**Attribute selector**: Chọn các element có cùng attribute

Ví dụ

```css
p {
}
#ID-name {
}
.class-name {
}
[href] {
}
```

Khi kết hợp hai hoặc nhiều selector với nhau bằng một số toán tử sau thì ta tạo ra một selector mới.

**(,)**: Dùng để chọn các selector mà chúng ta muốn có property giống nhau.

**(space)**: Dùng để chọn tất cả các selector là con cháu của selector khác.

**(>)**: Dùng để chọn các con trực tiếp của selector

**(+)**: Dùng để chọn selector liền kề một selector khác và phải dùng cha

Ví dụ

```css
h1,
h2,
h3 {
}
header h1 {
}
body > div {
}
header ~ footer {
}
```

Ngoài ra trong CSS3 ta được biết thêm 2 loại selector dặc biệt đó là: **Pseudo classes, Pseudo elements**.

Ví dụ

```css
a:hover {
}
div::before {
}
```

**Kết luận sương sương**: Các **selector** làm đúng như cái tên của nó là để chọn các element nhưng trong thực tế đôi khi do vô tình hoặc cố ý hoặc là cả hai điều trên thì một element có thể chịu tác động từ hai selector riêng biệt. Tệ hơn là hai selector này lại có chung property nhưng khác value vậy element sẽ chọn ai (_"Chọn con tim hay là nghe lý trí"_).

Ví dụ

```html
<div class="anh-da-vang">
  <p class="anh-da-trang" id="anh-da-den">
    "Chọn con tim hay là nghe lý trí"
  </p>
</div>
```

```css
.anh-da-trang {
  color: white;
}

#anh-da-den {
  color: blue;
}

div p {
  color: yellow;
}
```

Để biết p chọn ai thì chúng ta hãy cùng tìm hiểu trong bài viết kế tiếp nhé.

**Tài liệu tham khảo**

1. [CSS selectors (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

2. [CSS Selector (W3Schools)](https://www.w3schools.com/cssref/css_selectors.asp)
