import phone from '../assets/phone.svg'
import address from '../assets/address.svg'
import email from '../assets/email.svg'
import Frame from '../assets/Frame.png'
import "../css/Contact.css"
export const Contact = () => {
    return (
        <div className='Contact'>
            <div className='Contact-Content'>
                <h1>Kết nối ngay với chúng tôi</h1>
                <div >Cảm ơn bạn đã quan tâm đến các giải pháp của VTI Solutions. Đội ngũ chuyên gia của chúng tôi rất sẵn lòng hỗ trợ bạn cho những trải nghiệm tốt nhất về sản phẩm!</div>
                <div className='Contact-Info'>
                    <ul>
                        <li>
                            <span>
                                <img decoding="async" src={phone} class="image" alt="" />
                            </span>
                            <span>(+84)24-7303-9996</span>
                        </li>
                        <li>
                            <span>
                                <img decoding="async" src={email} class="image" alt="" />
                            </span>
                            <span>
                                info@vti.com.vn</span>
                        </li>
                        <li>
                            <span>
                                <img decoding="async" src={address} class="image" alt="" />
                            </span>
                            <span> Địa chỉ</span>
                        </li>
                    </ul>
                    <div class="listAddressContact">
                        <span>Việt Nam</span>
                        <ul>
                            <li>VTI Building, KĐT Mễ Trì Hạ, P. Mễ Trì, Q. Nam Từ Liêm, Tp. Hà Nội</li>
                            <li>Tầng 7, VNO Building, 124 Điện Biên Phủ, P. Đa Kao, Q. 1, Tp. Hồ Chí Minh</li>
                        </ul>
                    </div>
                    <div class="listAddressContact">
                        <span>Nhật Bản</span>
                        <ul>
                            <li>T&amp;T Building, 4F, 8-21, Tomihisacho, Shinjuku-ku, Tokyo</li>
                            <li>503 Touma Building, 1-3-21 Minamihoncho, Chuo-ku, Osaka, Japan</li>
                        </ul>
                    </div>
                    <div class="listAddressContact">
                        <span>Hàn Quốc</span>
                        <ul>
                            <li>Tầng 13, Goryeo Daeyeongak Tower, 97 Toegye-ro, Jung-gu, Seoul, Korea 04535 </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img src={Frame} />
                </div>

            </div>
            <div className=' Contact-Form'>
                <div className='Contact-Form-Content'>
                    <div className='Row-Form Col-1'>
                        <p>Họ và tên(*)</p> <br />
                        <input type="text" />
                    </div>
                    <div className='Row-Form  Col-2'>
                        <div className='Col-Form'>
                            <p>Số điện thoại(*)</p> <br />
                            <input type="text" />
                        </div>
                        <div className='Col-Form'>
                            <p>Email công việc(*)</p> <br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className='Row-Form  Col-2'>
                        <div className='Col-Form'>
                            <p>Tên doanh nghiệp(*)</p> <br />
                            <input type="text" />
                        </div>
                        <div className='Col-Form'>
                            <p>Chức vụ(*)</p> <br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className='Row-Form Col-1'>
                        <p>Lĩnh vực hoạt động(*)</p> <br />
                        <input type="text" />
                    </div>
                    <div className='Row-Form Col-1'>
                        <p>Nội dung(*)</p> <br />
                       <textarea name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className='Form-Submit-Button'>
                        <button type="button">Liên hệ chúng tôi</button>
                    </div>
                </div>
            </div>

        </div>
    );
}