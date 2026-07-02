export type SignupLang = "en" | "ko" | "ja" | "zh" | "ru" | "es" | "vi";

export type SignupCopy = {
  // Left panel
  earnTitle: string;
  earnDesc: string;
  points: string[];
  monthlyCommission: string;
  amount: string; // $1,800 (kept as-is across languages)
  directLabel: string;
  directValue: string;
  indirectLabel: string;
  indirectValue: string;
  signupsLabel: string;
  signupsValue: string;
  thisMonth: string;
  // Right panel
  programBadge: string;
  createTitle: string;
  createDesc: string;
  emailLabel: string;
  emailPlaceholder: string;
  domainPlaceholder: string;
  sendCode: string;
  verifyLabel: string;
  verifyPlaceholder: string;
  passwordLabel: string;
  confirmLabel: string;
  pwHint: string;
  pwMatch: string;
  nameLabel: string;
  // Terms sentence with {tos} and {privacy} markers
  termsTemplate: string;
  tosLabel: string;
  privacyLabel: string;
  backToLogin: string;
  signUp: string;
};

export function normalizeSignupLang(value: unknown): SignupLang | null {
  if (typeof value !== "string") return null;
  const v = value.toLowerCase();
  if (["en", "ko", "ja", "zh", "ru", "es", "vi"].includes(v)) return v as SignupLang;
  return null;
}

const en: SignupCopy = {
  earnTitle: "Start Earning with TradeIt",
  earnDesc:
    "Join the TradeIt Affiliate Partners Program and earn recurring commissions by recommending a global trade data and AI-powered sales platform.",
  points: [
    "15% direct recurring commission",
    "5% indirect partner commission",
    "Free to join",
    "Built for consultants, creators, communities, and trade networks",
  ],
  monthlyCommission: "Monthly Commission",
  amount: "$1,800",
  directLabel: "Direct",
  directValue: "15%",
  indirectLabel: "Indirect",
  indirectValue: "5%",
  signupsLabel: "Signups",
  signupsValue: "42",
  thisMonth: "This month",
  programBadge: "Affiliate Partners Program",
  createTitle: "Create your Partner account",
  createDesc:
    "Use your TradeIt account to access both the TradeIt platform and the Partner Program.",
  emailLabel: "Email",
  emailPlaceholder: "you",
  domainPlaceholder: "company.com",
  sendCode: "Send Code",
  verifyLabel: "Verification Code",
  verifyPlaceholder: "Enter the code sent to your email",
  passwordLabel: "Password",
  confirmLabel: "Confirm Password",
  pwHint: "8–20 characters (letters and numbers)",
  pwMatch: "Passwords match",
  nameLabel: "Name",
  termsTemplate: "By creating an account, you agree to the {tos} and {privacy}.",
  tosLabel: "Terms of Service",
  privacyLabel: "Privacy Policy",
  backToLogin: "Back to login",
  signUp: "Sign up",
};

const ko: SignupCopy = {
  earnTitle: "TradeIt과 함께 수익을 시작하세요",
  earnDesc:
    "글로벌 무역 데이터와 AI 기반 세일즈 플랫폼을 필요한 기업에 추천하고, 매월 반복 커미션을 받아보세요.",
  points: [
    "직접 추천 15% 반복 커미션",
    "파트너 추천 5% 커미션",
    "무료로 참여 가능",
    "컨설턴트, 크리에이터, 커뮤니티, 무역 네트워크에 적합",
  ],
  monthlyCommission: "월 예상 커미션",
  amount: "$1,800",
  directLabel: "직접 추천",
  directValue: "15%",
  indirectLabel: "파트너 추천",
  indirectValue: "5%",
  signupsLabel: "가입 수",
  signupsValue: "42",
  thisMonth: "이번 달",
  programBadge: "트레이드잇 파트너 프로그램",
  createTitle: "파트너 계정을 생성하세요",
  createDesc:
    "TradeIt 계정 하나로 TradeIt 플랫폼과 파트너 프로그램을 함께 이용할 수 있습니다.",
  emailLabel: "이메일",
  emailPlaceholder: "you",
  domainPlaceholder: "company.com",
  sendCode: "인증 코드 보내기",
  verifyLabel: "인증 코드",
  verifyPlaceholder: "이메일로 받은 인증 코드를 입력하세요",
  passwordLabel: "비밀번호",
  confirmLabel: "비밀번호 확인",
  pwHint: "8–20자, 영문과 숫자 포함",
  pwMatch: "비밀번호가 일치합니다",
  nameLabel: "이름",
  termsTemplate: "계정을 생성하면 {tos} 및 {privacy}에 동의하는 것으로 간주됩니다.",
  tosLabel: "이용약관",
  privacyLabel: "개인정보처리방침",
  backToLogin: "로그인으로 돌아가기",
  signUp: "가입하기",
};

const ja: SignupCopy = {
  earnTitle: "TradeItで収益化を始めましょう",
  earnDesc:
    "グローバル貿易データとAIを活用した営業プラットフォームを必要な企業に紹介し、継続コミッションを受け取りましょう。",
  points: [
    "直接紹介 15% の継続コミッション",
    "パートナー紹介 5% コミッション",
    "無料で参加可能",
    "コンサルタント、クリエイター、コミュニティ、貿易ネットワーク向け",
  ],
  monthlyCommission: "月間コミッション",
  amount: "$1,800",
  directLabel: "直接紹介",
  directValue: "15%",
  indirectLabel: "間接紹介",
  indirectValue: "5%",
  signupsLabel: "登録数",
  signupsValue: "42",
  thisMonth: "今月",
  programBadge: "TradeIt パートナープログラム",
  createTitle: "パートナーアカウントを作成",
  createDesc:
    "TradeItアカウントで、TradeItプラットフォームとパートナープログラムの両方にアクセスできます。",
  emailLabel: "メールアドレス",
  emailPlaceholder: "you",
  domainPlaceholder: "company.com",
  sendCode: "認証コードを送信",
  verifyLabel: "認証コード",
  verifyPlaceholder: "メールで受け取ったコードを入力してください",
  passwordLabel: "パスワード",
  confirmLabel: "パスワード確認",
  pwHint: "8〜20文字、英字と数字を含む",
  pwMatch: "パスワードが一致しています",
  nameLabel: "名前",
  termsTemplate: "アカウントを作成すると、{tos}および{privacy}に同意したものとみなされます。",
  tosLabel: "利用規約",
  privacyLabel: "プライバシーポリシー",
  backToLogin: "ログインに戻る",
  signUp: "登録する",
};

const zh: SignupCopy = {
  earnTitle: "开始通过 TradeIt 获得收益",
  earnDesc:
    "推荐这款由全球贸易数据和 AI 驱动的销售平台，帮助企业拓展业务，并获得持续佣金。",
  points: [
    "直接推荐 15% 持续佣金",
    "合作伙伴推荐 5% 佣金",
    "免费加入",
    "适合顾问、内容创作者、社群和贸易网络",
  ],
  monthlyCommission: "月度佣金",
  amount: "$1,800",
  directLabel: "直接推荐",
  directValue: "15%",
  indirectLabel: "间接推荐",
  indirectValue: "5%",
  signupsLabel: "注册数",
  signupsValue: "42",
  thisMonth: "本月",
  programBadge: "TradeIt 合作伙伴计划",
  createTitle: "创建合作伙伴账户",
  createDesc: "使用你的 TradeIt 账户，即可访问 TradeIt 平台和合作伙伴计划。",
  emailLabel: "邮箱",
  emailPlaceholder: "you",
  domainPlaceholder: "company.com",
  sendCode: "发送验证码",
  verifyLabel: "验证码",
  verifyPlaceholder: "请输入发送到你邮箱的验证码",
  passwordLabel: "密码",
  confirmLabel: "确认密码",
  pwHint: "8–20 个字符，包含字母和数字",
  pwMatch: "密码一致",
  nameLabel: "姓名",
  termsTemplate: "创建账户即表示你同意{tos}和{privacy}。",
  tosLabel: "服务条款",
  privacyLabel: "隐私政策",
  backToLogin: "返回登录",
  signUp: "注册",
};

const ru: SignupCopy = {
  earnTitle: "Начните зарабатывать с TradeIt",
  earnDesc:
    "Рекомендуйте платформу для международных продаж на базе глобальных торговых данных и AI и получайте регулярные комиссии.",
  points: [
    "15% регулярной комиссии за прямую рекомендацию",
    "5% комиссии за партнёрскую рекомендацию",
    "Участие бесплатно",
    "Подходит для консультантов, авторов, сообществ и торговых сетей",
  ],
  monthlyCommission: "Ежемесячная комиссия",
  amount: "$1,800",
  directLabel: "Прямые",
  directValue: "15%",
  indirectLabel: "Партнёрские",
  indirectValue: "5%",
  signupsLabel: "Регистрации",
  signupsValue: "42",
  thisMonth: "В этом месяце",
  programBadge: "Партнёрская программа TradeIt",
  createTitle: "Создайте партнёрский аккаунт",
  createDesc:
    "Используйте аккаунт TradeIt для доступа к платформе TradeIt и партнёрской программе.",
  emailLabel: "Email",
  emailPlaceholder: "you",
  domainPlaceholder: "company.com",
  sendCode: "Отправить код",
  verifyLabel: "Код подтверждения",
  verifyPlaceholder: "Введите код, отправленный на ваш email",
  passwordLabel: "Пароль",
  confirmLabel: "Подтвердите пароль",
  pwHint: "8–20 символов, буквы и цифры",
  pwMatch: "Пароли совпадают",
  nameLabel: "Имя",
  termsTemplate: "Создавая аккаунт, вы соглашаетесь с {tos} и {privacy}.",
  tosLabel: "Условиями использования",
  privacyLabel: "Политикой конфиденциальности",
  backToLogin: "Вернуться к входу",
  signUp: "Зарегистрироваться",
};

const es: SignupCopy = {
  earnTitle: "Empieza a generar ingresos con TradeIt",
  earnDesc:
    "Recomienda una plataforma de ventas impulsada por datos globales de comercio e AI y recibe comisiones recurrentes.",
  points: [
    "15% de comisión recurrente por recomendación directa",
    "5% de comisión por partners invitados",
    "Participación gratuita",
    "Diseñado para consultores, creadores, comunidades y redes comerciales",
  ],
  monthlyCommission: "Comisión mensual",
  amount: "$1,800",
  directLabel: "Directo",
  directValue: "15%",
  indirectLabel: "Indirecto",
  indirectValue: "5%",
  signupsLabel: "Registros",
  signupsValue: "42",
  thisMonth: "Este mes",
  programBadge: "Programa de Partners de TradeIt",
  createTitle: "Crea tu cuenta de partner",
  createDesc:
    "Usa tu cuenta de TradeIt para acceder tanto a la plataforma TradeIt como al Programa de Partners.",
  emailLabel: "Email",
  emailPlaceholder: "you",
  domainPlaceholder: "company.com",
  sendCode: "Enviar código",
  verifyLabel: "Código de verificación",
  verifyPlaceholder: "Introduce el código enviado a tu email",
  passwordLabel: "Contraseña",
  confirmLabel: "Confirmar contraseña",
  pwHint: "8–20 caracteres, con letras y números",
  pwMatch: "Las contraseñas coinciden",
  nameLabel: "Nombre",
  termsTemplate: "Al crear una cuenta, aceptas los {tos} y la {privacy}.",
  tosLabel: "Términos de servicio",
  privacyLabel: "Política de privacidad",
  backToLogin: "Volver al login",
  signUp: "Registrarse",
};

const vi: SignupCopy = {
  earnTitle: "Bắt đầu tạo thu nhập cùng TradeIt",
  earnDesc:
    "Giới thiệu nền tảng bán hàng được hỗ trợ bởi dữ liệu thương mại toàn cầu và AI, đồng thời nhận hoa hồng định kỳ.",
  points: [
    "15% hoa hồng định kỳ từ giới thiệu trực tiếp",
    "5% hoa hồng từ cộng tác viên được mời",
    "Tham gia miễn phí",
    "Phù hợp với tư vấn viên, nhà sáng tạo, cộng đồng và mạng lưới thương mại",
  ],
  monthlyCommission: "Hoa hồng hằng tháng",
  amount: "$1,800",
  directLabel: "Trực tiếp",
  directValue: "15%",
  indirectLabel: "Gián tiếp",
  indirectValue: "5%",
  signupsLabel: "Lượt đăng ký",
  signupsValue: "42",
  thisMonth: "Tháng này",
  programBadge: "Chương trình Cộng tác viên của TradeIt",
  createTitle: "Tạo tài khoản cộng tác viên",
  createDesc:
    "Sử dụng tài khoản TradeIt để truy cập cả nền tảng TradeIt và Chương trình Cộng tác viên.",
  emailLabel: "Email",
  emailPlaceholder: "you",
  domainPlaceholder: "company.com",
  sendCode: "Gửi mã",
  verifyLabel: "Mã xác minh",
  verifyPlaceholder: "Nhập mã đã được gửi đến email của bạn",
  passwordLabel: "Mật khẩu",
  confirmLabel: "Xác nhận mật khẩu",
  pwHint: "8–20 ký tự, gồm chữ và số",
  pwMatch: "Mật khẩu khớp",
  nameLabel: "Tên",
  termsTemplate: "Khi tạo tài khoản, bạn đồng ý với {tos} và {privacy}.",
  tosLabel: "Điều khoản dịch vụ",
  privacyLabel: "Chính sách quyền riêng tư",
  backToLogin: "Quay lại đăng nhập",
  signUp: "Đăng ký",
};

export const signupDict: Record<SignupLang, SignupCopy> = {
  en,
  ko,
  ja,
  zh,
  ru,
  es,
  vi,
};
