"use client"; // Mark this as a client component

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import `useParams` for App Router
import newsData from "../utils/news";
import commentsData from "../utils/comments";
import usersData from "../utils/users";

// Define the types for the news article and comment data
interface NewsArticle {
  _id: string;
  title: string;
  content: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

interface Comment {
  collectionId: string;
  itemId: string;
  refType: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

const FullNewsPage = () => {
  const { id } = useParams(); // Get `id` from the dynamic route

  const [news, setNews] = useState<NewsArticle | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (id) {
      const newsArticle = newsData.find((item) => item._id === id);
      if (newsArticle) {
        setNews(newsArticle);
      } else {
        window.location.href = "/404"; // Redirect to 404 if the news article is not found
      }

      const newsComments = commentsData.filter(
        (comment) => comment.itemId === id && comment.refType === "news"
      );
      setComments(newsComments);
    }
  }, [id]);

  if (!news) return <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-4 py-4">
        <div className="max-w-screen-xl mx-auto mt-8 grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <h2 className="mb-5 font-bold">
              Luxora Bắc Giang - Toà Tháp Đôi Biểu Tượng Năm Trong The Terra
              Được Văn Phú Invest Chuyển Nhượng Cho Chủ Đầu Tư Mới New Goldsun
            </h2>
            <div className="text-gray-600 flex gap-2 mb-5 text-sm">
              <img
                src="https://cdn-assets-angel.batdongsan.com.vn/assets/images/authorDefaultPhoto.png"
                className="h-10 w-10 rounded-full border"
              />
              <div>
                <p>
                  <span className="mr-1">Được đăng bởi</span>
                  <strong>Hải Âu</strong>
                </p>
                <div>
                  <span className="mr-2">
                    Cập nhật lần cuối vào 28/11/2024 07:50
                  </span>
                  <span>• Đọc trong khoảng 3 phút</span>
                </div>
              </div>
            </div>
            <article data-clarity-region="article">
              <div className="content-wrapper">
                <div className="p">
                  <strong>
                    New Goldsun chính thức tiếp nhận quyền phát triển tòa tháp
                    đôi thuộc dự án The Terra – Bắc Giang từ Văn Phú – Invest.
                    Công trình biểu tượng này đánh dấu bước tiến mới, góp phần
                    kiến tạo diện mạo hiện đại và kết nối cho trung tâm vùng Bắc
                    Giang.{" "}
                  </strong>
                </div>

                <div className="p mt-4">
                  Ngày 2/8/2024 tại Hà Nội, buổi lễ ký kết đã diễn ra thành
                  công, mở ra chương mới cho hành trình kiến tạo của New Goldsun
                  tại The Terra – Bắc Giang. Dự án The Terra giờ đây chính thức
                  có tên gọi mới “Luxora”. Với diện tích 4,5 ha, dự án tọa lạc
                  tại vị trí đắc địa, kết nối linh hoạt giữa trung tâm thành phố
                  và các vùng phụ cận, tạo điều kiện thuận lợi cho cư dân tiếp
                  cận các tiện ích hiện đại và dịch vụ cao cấp. Trong đó, tòa
                  tháp đôi được thiết kế với phong cách kiến trúc độc đáo, mang
                  lại không gian sống đẳng cấp, đồng thời đóng vai trò là biểu
                  tượng kiến trúc mới, nâng tầm giá trị khu đô thị.{" "}
                </div>

                <figure className="mt-4 size-full">
                  <img
                    src="https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2024/11/thumbnail_anh-x-1.jpg"
                    alt=""
                    loading="lazy"
                  />
                </figure>

                <div className="p">
                  Thừa hưởng nền tảng thành công từ phần thấp tầng của Văn Phú,
                  New Goldsun tiếp tục phát triển dự án với tầm nhìn xa, hướng
                  tới một không gian sống xanh, bền vững và tích hợp đầy đủ các
                  tiện ích cho cộng đồng. Toà tháp đôi Luxora không chỉ là nơi
                  ở, mà còn là không gian giao lưu kết nối, với hàng loạt tiện
                  ích vượt trội như công viên cây xanh rộng lớn, khu vui chơi
                  giải trí, và các khu sinh hoạt cộng đồng hiện đại, đáp ứng tối
                  đa nhu cầu sống và thư giãn của cư dân.{" "}
                </div>

                <figure className="mt-4 size-full">
                  <img
                    src="https://img.iproperty.com.my/angel/750x1000-fit/wp-content/uploads/sites/7/2024/11/anh-xx-.jpg"
                    alt=""
                    loading="lazy"
                  />
                </figure>

                <div className="p">
                  Sự chuyển nhượng dự án giữa New Goldsun và Văn Phú – Invest
                  không đơn thuần là một thương vụ kinh tế, mà còn là bước đệm
                  cho sự mở rộng và phát triển dài hạn của New Goldsun trong
                  lĩnh vực bất động sản. Với vị trí chiến lược và tiềm năng phát
                  triển mạnh mẽ, Luxora vừa là không gian sống lý tưởng mà còn
                  là cơ hội đầu tư hấp dẫn, tạo nên sức hút lớn trên thị trường
                  bất động sản khu vực phía Bắc.{" "}
                </div>

                <div className="p">
                  New Goldsun cam kết mang đến một không gian sống hiện đại, an
                  toàn và thân thiện, góp phần thay đổi diện mạo đô thị Bắc
                  Giang, đồng thời khẳng định vị thế vững chắc của mình trên bản
                  đồ bất động sản Việt Nam. Thương vụ chuyển nhượng này là minh
                  chứng cho tầm nhìn dài hạn và khát vọng phát triển bền vững
                  của New Goldsun, hứa hẹn sẽ mang đến cho cư dân Bắc Giang một
                  trải nghiệm sống hoàn hảo, góp phần thúc đẩy sự phát triển
                  kinh tế – xã hội của khu vực.
                </div>

                <div className="p">
                  <strong>B.T </strong>
                </div>

                <div className="p">—————–</div>
              </div>
              <div className="content-wrapper">
                <div className="p">
                  <i>
                    <b>Tuyên bố miễn trừ trách nhiệm:</b> Thông tin được cung
                    cấp chỉ mang tính chất thông tin chung, Công ty cổ phần
                    PropertyGuru Việt Nam không đưa ra bất kỳ tuyên bố hoặc bảo
                    đảm nào liên quan đến thông tin, bao gồm nhưng không giới
                    hạn bất kỳ sự tuyên bố hoặc bảo đảm về tính thích hợp cho
                    bất kỳ mục đích cụ thể nào của thông tin theo phạm vi cho
                    phép tối đa của pháp luật. Mặc dù đã nỗ lực để đảm bảo rằng
                    thông tin được cung cấp trong bài viết này là chính xác,
                    đáng tin cậy và hoàn chỉnh vào thời điểm đăng tải, nhưng
                    thông tin được cung cấp trong bài viết này không nên được
                    dựa vào để đưa ra bất kỳ quyết định tài chính, đầu tư, bất
                    động sản hoặc pháp lý nào. Thêm vào đó, thông tin không thể
                    thay thế lời khuyên từ một chuyên gia được đào tạo, người mà
                    có thể xem xét, đánh giá các sự kiện và hoàn cảnh cá nhân
                    của bạn, và chúng tôi không chịu bất kỳ trách nhiệm nào nếu
                    bạn sử dụng những thông tin này để đưa ra quyết định.
                  </i>
                </div>
              </div>
            </article>
          </div>

          <aside className="col-span-4 ">
            <div className="border rounded-lg p-4">
              <h4 className="mb-4">Bài viết được xem nhiều nhất</h4>
              <ul className="space-y-2">
                <li className="py-2 border-b border-gray-200">
                  Trọn Bộ Lãi Suất Vay Mua Nhà Mới Nhất Tháng 11/2024
                </li>
                <li className="py-2 border-b border-gray-200">
                  Thị Trường BĐS Tháng 10/2024: Phục Hồi Cả Nhu Cầu Và Lượng Tin
                  Đăng
                </li>
                <li className="py-2 border-gray-200">
                  Bất Động Sản Đông Anh (Hà Nội) Tiếp Tục Nổi Sóng Mới
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Add Comment Section */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Thêm bình luận</h3>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            rows={4}
            placeholder="Thêm bình luận của bạn"
          ></textarea>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg">
            Gửi bình luận
          </button>
        </section>

        {/* Comments Section */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold">Bình luận</h3>
          <div>
            {comments.map((comment) => (
              <div key={comment.collectionId} className="p-4 border-b">
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-800">
                    {
                      usersData.find((user) => user._id === comment.userId)
                        ?.username
                    }{" "}
                    :
                  </span>{" "}
                  {comment.content}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(comment.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FullNewsPage;
