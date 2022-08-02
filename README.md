# TỔNG QUAN DỰ ÁN DEMO

- App hoàn thành phần giao diện và các chức năng cơ bản. Gồm hai flow chính là Authentication và Main.
Người dùng có thể đăng ký/ đăng nhập/ đăng xuất từ app.

- Sử dụng mobx để quản lý state của user. Hiện tại trong dự án đang lưu data user đăng ký và đăng nhập. Phần này đang được config theo đường dẫn src/stores

- Về animation, sử dụng renaimated2 để tạo modal -> components/AppModal.

- Hiện tại app đang config 3 môi trường cho build là DEV, PRODUCT và STAGING. Mỗi môi trường sẽ xuất ra 1 app khác nhau và dựa vào env file để nhân config đường dẫn.

- Về test thì đang sử dụng jest để thưc hiện việc test, trong folder __test__ có 3 màn hình đang được test tuy nhiên đang có trục trặc ở phần config nên chưa thể hoàn thành được các bài test

- Nên mở xcode để build app. 
