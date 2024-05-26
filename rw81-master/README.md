## JSX: Javascript XML
- Viết HTML trong Javascript

## Component
- Là 1 hàm trong js và return UI
- Component render: là quá trình component được hiển thị trên UI,
và thực thi các đoạn code trong component từ trên xuống dưới và return UI

## State 
`var x = 1; x = 10`
`const [x, setX] = useState(1)`
`=> setX(10)`
`const [data, setData] = useState(X)`
- data: là giá trị của state
- setData: là 1 hàm để cập nhật state
- X: là giá trị khởi tạo ban đầu
=> khi state thay đổi => component render lại.

## Prop
- Là 1 object chứa giá trị đầu vào của 1 component được truyền từ component cha xuống
- Không thể sửa đổi props từ component con

## Life cycle (1 vòng đời của 1 component)
- Mounting: component render, xuất hiện lần đầu trên UI
- Updating: state thay đổi => component update state và render lại
- Unmounting: component bị mất khỏi UI

## useEffect
`useEffect(callback func, dependencies)`
- callback: chạy khi component render UI xong, luôn luôn chạy khi component render lần đầu (Mounting)
- dependencies: 
+ không có: callback luôn luôn chạy lại mỗi khi component render (Updating)
+ là 1 mảng rỗng []: callback chỉ chạy duy nhất khi component render lần đầu (Mounting)
+ là 1 mảng có phần tử, ví dụ [x,y]: callback chạy lại mỗi khi x hoặc y thay đổi (Updating)
- clean up function:
+ Mounting: ko chạy
+ Updating: chạy clean up trước rồi chạy đoạn code trên nó
+ Unmounting: có chạy

## localStorage vs sessionStorage vs Cookie
- dùng để lưu trữ dữ liệu trên trình duyệt
- cú pháp giống nhau

- localStorage:
+ lưu dữ liệu vô hạn, dữ liệu không bị mất đi khi đóng tab, dữ liệu chỉ bị mất đi khi mình xóa nó
+ dữ liệu được lưu đồng bộ giữa các tab
+ chỉ được set trên trình duyệt

- sessionStorage:
+ lưu dữ liệu theo phiên, dữ liệu sẽ bị mất đi khi đóng tab
+ dữ liệu không được lưu đồng bộ giữa các tab
+ chỉ được set trên trình duyệt

- cookie:
+ dung lượng: 4KB
+ cả FE và BE đều set được
+ có thể set được thời gian hết hạn
+ tự động gắn kèm vào request khi call lên server
+ httpOnly: true (chỉ BE được set) => không thể truy cập được cookie từ js
=> ngăn chặn tấn công XSS 
+ Secure: đảm bảo cookie chỉ được gửi qua https

===> nên lưu token ở cookie

## Redux
- Dùng để quản lý global state, tránh props drilling gây phức tạp và khó quản lý
- Các thành phần:
+ Store: chứa state và reducer
+ State: là dữ liệu
+ Reducer: chứa các hàm xử lý state dựa vào action được gửi lên từ UI
+ Action: chứa type và payload (payload là dữ liệu được gửi lên từ UI)
+ UI: là giao diện web, bên phía component

+ useDispatch: dùng để gửi action lên reducer
+ useSelector: dùng để lấy state từ store về UI

## các phương thức call API (GET, POST, PUT, DELETE, ..)
## các phương thức xử lý mảng trong JS
## Promise, async/ await
## React router dom (chuyển trang dùng thẻ <Link /> và hook useNavigate)


