// Test script để kiểm tra chức năng đổi mật khẩu tự động
import { changePassword } from './server/lib/puppeteer.js';

async function testPasswordChange() {
  console.log('🧪 Bắt đầu test chức năng đổi mật khẩu với tài khoản thật...');
  
  const testAccount = {
    id: 999,
    username: "nhungcamcu",
    password: "thuevip.com2509"
  };

  const newPassword = `test${Date.now()}`;
  
  console.log(`🔄 Đang thử đổi mật khẩu cho ${testAccount.username}`);
  console.log(`📝 Mật khẩu cũ: ${testAccount.password}`);
  console.log(`📝 Mật khẩu mới: ${newPassword}`);
  
  try {
    const result = await changePassword(testAccount, newPassword);
    
    console.log('\n📊 KẾT QUÁ TEST:');
    console.log('================');
    
    if (result.success) {
      console.log('✅ THÀNH CÔNG! Đã đổi mật khẩu thành công');
      console.log(`🔑 Mật khẩu mới: ${result.newPassword}`);
      console.log('🎉 Chức năng đổi mật khẩu tự động hoạt động tốt!');
    } else {
      console.log('❌ THẤT BẠI: Không thể đổi mật khẩu');
      console.log('⚠️  Có thể do bảo vệ chống bot hoặc cấu trúc website thay đổi');
    }
    
  } catch (error) {
    console.error('💥 LỖI TRONG QUÁ TRÌNH TEST:', error.message);
  }
}

// Chạy test
testPasswordChange()
  .then(() => {
    console.log('\n🏁 Hoàn thành test chức năng đổi mật khẩu');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💀 Lỗi nghiêm trọng:', error);
    process.exit(1);
  });