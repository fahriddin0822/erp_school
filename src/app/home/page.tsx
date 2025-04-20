import ReadMore from "@/components/buttons/ReadMore";
import NoticeCard from "@/components/NoticeCard";
import { Card } from "@/components/ui/card";
import { get_notices } from "@/lib/controller/get_notices";
import { SCHOOL_INTRO, SCHOOL_NAME } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const page = async () => {
  const { notices } = await get_notices({ take: 5 });
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 rounded-lg my-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">IT va Robotika Ta'lim Markazi</h1>
          <p className="text-xl mb-6">Samarqandda zamonaviy IT va robotika ko'nikmalarini o'rganing</p>
          <div className="flex justify-center space-x-4">
            <Link href="/courses" className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-300">
              Kurslar
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white px-6 py-2 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-300">
              Biz bilan bog'laning
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7 p-2">
          <Card className="px-6 md:px-8 py-4 my-2">
            <h1 className="font-extrabold text-2xl text-center my-2">
              Bizning o'quv dasturlarimiz
            </h1>
            <div className="flex w-full gap-4">
              <Link href="/courses/it" className="w-1/2">
                <Card className="h-24 flex items-center justify-center font-bold text-xl bg-purple-800 text-gray-200">
                  IT
                </Card>
              </Link>
              <Link href="/courses/robotics" className="w-1/2">
                <Card className="h-24 flex items-center justify-center font-bold text-xl bg-sky-800 text-gray-200">
                  Robotika
                </Card>
              </Link>
            </div>
          </Card>

          <Card className="px-6 md:px-8 py-4">
            <h2 className="font-bold text-xl text-center py-4 text-gray-900">
              {SCHOOL_NAME} ga xush kelibsiz
            </h2>
            <p className="text-justify text-gray-600">
              Samarqanddagi yetakchi IT va Robotika o'quv markazimizga xush kelibsiz! Bizning markazimiz zamonaviy texnologiyalar sohasida yuqori sifatli ta'lim berish uchun mo'ljallangan. Biz o'quvchilarimizga dasturlash, web-dizayn, mobil ilovalar yaratish, sun'iy intellekt va robotika kabi sohalardagi bilim va ko'nikmalarni taqdim etamiz. Tajribali o'qituvchilarimiz va zamonaviy jihozlangan auditoriyalarimiz sizga nazariy va amaliy bilimlarni samarali o'zlashtirishga yordam beradi...
            </p>
            <div className="flex justify-end">
              <ReadMore href="/home/message/welcome" />
            </div>
          </Card>

          {/* Featured Courses */}
          <Card className="px-6 md:px-8 py-4 mt-4">
            <h2 className="font-bold text-xl text-center py-4 text-gray-900">
              Mashhur kurslar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 border-l-4 border-blue-500">
                <h3 className="font-bold text-lg">Web dasturlash</h3>
                <p className="text-gray-600">HTML, CSS, JavaScript va zamonaviy frontend freymvorklar</p>
              </Card>
              <Card className="p-4 border-l-4 border-green-500">
                <h3 className="font-bold text-lg">Android dasturlash</h3>
                <p className="text-gray-600">Java va Kotlin bilan mobil ilovalar yaratish</p>
              </Card>
              <Card className="p-4 border-l-4 border-yellow-500">
                <h3 className="font-bold text-lg">Arduino robotika</h3>
                <p className="text-gray-600">Elektronika asoslari va robotlarni dasturlash</p>
              </Card>
              <Card className="p-4 border-l-4 border-purple-500">
                <h3 className="font-bold text-lg">AI asoslari</h3>
                <p className="text-gray-600">Sun'iy intellekt va ma'lumotlar tahlili</p>
              </Card>
            </div>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-5 my-4 p-2">
          {/* Contact Information */}
          <Card className="p-6 mb-6 bg-gray-50">
            <h2 className="font-bold text-2xl mb-4">Biz bilan bog'laning</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <p className="text-gray-700">Samarqand, 1-hammom</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <p className="text-gray-700">+998 50 500 4030</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <p className="text-gray-700">info@itcenter.uz</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">Ish vaqtlarimiz:</h3>
              <p className="text-gray-700">Dushanba - Shanba: 9:00 - 18:00</p>
              <p className="text-gray-700">Yakshanba: Yopiq</p>
            </div>
          </Card>

          <h2 className="font-bold text-2xl mb-2">E'lonlar</h2>
          {notices!.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <Card className="px-6 md:px-8 py-6 my-4">
        <h2 className="font-bold text-2xl text-center mb-6">O'quvchilar fikrlari</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-4 bg-gray-50">
            <p className="italic text-gray-600 mb-4">"Bu markaz menga IT sohasida karyeramni boshlashga yordam berdi. O'qituvchilar juda bilimdon va har doim yordam berishga tayyor."</p>
            <p className="font-semibold">- Aziz Karimov</p>
          </Card>
          <Card className="p-4 bg-gray-50">
            <p className="italic text-gray-600 mb-4">"Robotika kursini tugatganimdan so'ng, o'z loyihamni boshlashga muvaffaq bo'ldim. Bu yerda olgan bilimlarim juda qimmatli."</p>
            <p className="font-semibold">- Nigora Tosheva</p>
          </Card>
          <Card className="p-4 bg-gray-50">
            <p className="italic text-gray-600 mb-4">"Zamonaviy jihozlar va amaliy mashg'ulotlar bilan ta'minlangan bu markaz Samarqanddagi eng yaxshisi deb hisoblayman."</p>
            <p className="font-semibold">- Jahongir Rahimov</p>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default page;