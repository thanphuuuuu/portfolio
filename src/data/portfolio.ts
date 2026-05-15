import type { PortfolioData } from "../types/";

export const portfolioData: PortfolioData = {
  // Infor
  name: "Thanh Phu",
  role: "Software Engineer",
  about:
    "I'm a passionate Software Engineer focused on building minimal, functional, and user-centric web applications. I love working with modern web technologies and continuously learning new things to improve my craft.",
  email: "tranlethanhphu.252005@gmail.com",
  github: "https://github.com/thanphuuuuu",
  linkedin: "https://linkedin.com/in/",

  // Skills
  skills: [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Docker",
    "Git",
    "PostgreSQL",
    "MongoDB",
  ],

  // Experience
  experience: [
    {
      id: "exp-1",
      role: "Frontend Developer Intern",
      company: "Tech Company",
      duration: "Jan 2024 - Present",
      description: [
        "Developed and maintained responsive user interfaces using React and Tailwind CSS.",
        "Collaborated with designers to implement pixel-perfect minimalist designs.",
        "Optimized web performance and improved accessibility across the application.",
      ],
    },
    {
      id: "exp-2",
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Jun 2023 - Dec 2023",
      description: [
        "Built landing pages and e-commerce platforms for various clients.",
        "Implemented animations and interactive elements using Framer Motion.",
        "Ensured SEO best practices and fast loading times for all projects.",
      ],
    },
  ],

  // Projects
  /*
   * HƯỚNG DẪN THAY ẢNH DỰ ÁN THẬT:
   *
   * Có 2 cách để bạn đưa ảnh thật của mình vào đây thay vì dùng ảnh giả lập (placehold.co):
   *
   * Cách 1 (Khuyên dùng - Đơn giản nhất):
   * - Tạo một thư mục tên là 'images' bên trong thư mục 'public' của dự án (tức là: public/images/).
   * - Copy các file ảnh thật của bạn vào đó (ví dụ: public/images/du-an-1.jpg).
   * - Đổi giá trị của trường 'image' bên dưới thành đường dẫn tính từ thư mục public:
   *   image: "/images/du-an-1.jpg",
   *
   * Cách 2 (Import từ src/assets):
   * - Bỏ ảnh của bạn vào thư mục 'src/assets/'.
   * - Import ảnh ở ngay đầu file này (dưới các dòng import khác), ví dụ:
   *   import anhDuAn1 from '../assets/du-an-1.png';
   * - Sửa trường 'image' thành biến bạn vừa import:
   *   image: anhDuAn1,
   */
  projects: [
    {
      id: "proj-1",
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for managing e-commerce data with real-time updates and analytics.",
      image:
        "https://placehold.co/600x400/18181b/ffffff?text=E-Commerce+Dashboard",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
    {
      id: "proj-2",
      title: "Task Management App",
      description:
        "A minimalist task management tool designed for productivity and focus.",
      image:
        "https://placehold.co/600x400/18181b/ffffff?text=Task+Management+App",
      techStack: ["Next.js", "Prisma", "Tailwind CSS"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com",
    },
  ],
};
