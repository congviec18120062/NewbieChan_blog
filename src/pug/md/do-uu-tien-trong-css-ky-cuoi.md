Để mình tóm tắt sơ qua về Kỳ 2:

- Giới thiệu về cách tính chỉ số ưu tiên của các selector chỉ vào cùng một element.
- Anh da đen có bố là anh da đỏ đang thắng thế, nhưng anh da trắng của một skill là tiền, ta cũng xem ai sẽ thắng trong hiệp 2 nha.

## !important, biến selector thành bad guy và những điều bạn cần biết

![gif](https://media.giphy.com/media/S4Am9JUfFXj0YaYzHi/giphy.gif)

Nếu các bạn vẫn còn nhớ secifishity, thì **!important**, không có cùng dạng chỉ số ưu tiên như các loại selector khác, vì nó **_giống như_** đang tạo một môi trường ưu tiên mới cao hơn môi trường cũ và chỉ so sánh những selector có chung môi trường.

(_mình phải nhấn mạnh rằng **!important** không tạo môi trường nhưng hiểu theo nghĩa đó sẽ dơn giản hơn_)

Ví dụ

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

#anh-da-den {
  color: blue;
}

#anh-da-do #anh-da-den {
  color: green;
}
```

Ở trong selector này chỉ có _.anh-da-trang_ là có **!important** nên _.anh-da-trang_ đã chiến thắng giống như nếu xét về tiền mà chỉ có anh da trắng có thôi thì anh ấy sẽ chiến thắng. Nhưng ví dụ anh da đen cũng có **!important** thì lúc này anh da đen sẽ thắng vì họ cùng có cùng điều kiện như nhau nhưng anh da đen giỏi hơn.

Và để thấy rằng **!important** không được tính độ ưu tiên thì ta thử cho selector anh da trắng _hai_ **!important** và anh da đen chỉ có _một_.

```css
.anh-da-trang {
  color: white !important !important;
}

#anh-da-den {
  color: blue !important;
}
```

Kết quả là _#anh-da-den_ vẫn thắng lạ quá nhỉ :). Vì vậy có lẻ chúng ta không nên tính mức độ ưu tiên của **!important** vì nó đễ khiến ta hiểu sai như ví dụ trên rằng khi cộng dồn lại thì chỉ số sẽ lớn hơn.

Như title mình có viết **!important** có thể khiến selector thành bad guy vì dùng chúng trong file CSS khiến ta tạo ra những lỗi mà chúng ta không biết tại sao sai khi chúng vô tình ghi dè lên các selector khác.

**Vậy khi nào chúng ta sẽ dùng !important ?**

Nói đi thì cũng phải nói lại, **!important** không thể được tạo ra nếu nó không có tác dụng gì được.

Có một số trường hợp chính ta sửa dụng **!important**:

1. Khi ta thêm các thư viện như Bootstrap thì sẽ có nhưng lúc ta muốn ghi dè lên các property của các class của framework này. (_Tuy nhiên hiện giờ mình nghĩ chúng ta hoàn toàn có thể tải bootstrap về và chỉnh sửa trong chính file css này nên cũng không cần dùng **!important** nữa._)
2. Trong các trình duyệt cũ thì sử dụng **!important** là một trong những trick để sử dụng các property mới sau này. (_Tuy nhiên mình cũng nhấn mạnh rằng giờ rất ít người dùng IE nên có lẻ chúng ta chỉ nên cross-browser với các trình duyệt thực sự lớn thôi._)
3. Đôi khi ta muốn debug trong CSS thì ta hoàn toàn có thể dùng **!important**, để ghi dè lên hết các property ảnh hường và từ dó tìm ra lý do vì sao một property nào đó không hoạt động.

**Kết luận sương sương:** Bạn nên xem **!important** là một best-practice ý nhầm **bad-pratice** chứ :) và hạn chế sử dụng trong hầu hết mọi tình huống. Ngoài ra chúng ta cũng không nên tính chỉ số của **!important**, vì nó kiến cho ta hiểu sai. Thêm nữa thì chúng ta cũng có rất nhiều cách để thay thế **!important**, mà mình sẽ giới thiệu trong một bài viết khác.

Thực sự thì chuỗi bài viết cũng chỉ mới xoay quanh một số vấn đề mình hay dùng thôi còn những trường hợp như kế thừa hay inline style thì mình nghĩ là sẽ viết trong một bài viết khác.

**Tài liệu tham khảo**

1. [The !important exception (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#The_!important_exception)

2. [!important rule (W3C)](https://www.w3.org/TR/CSS2/cascade.html#important-rules)

**Một số bài viết hay về chủ đề này**

1. [CSS Soecificity war](https://stuffandnonsense.co.uk/archives/css_specificity_wars.html)

2. [When Using !important is The Right Choice](https://css-tricks.com/when-using-important-is-the-right-choice/)
