export type UserRole = 'student' | 'teacher' | 'parent' | 'counselor' | 'vice_principal' | 'principal' | 'school_admin' | 'school_manager' | 'super_admin' | 'platform_admin' | 'admin' | 'assistant';

export interface AuthUser {
  id: string;
  username: string;
  fullName: string;
  name?: string;
  email?: string;
  role: UserRole;
  avatarUrl?: string;
  loginMethod: 'google' | 'credentials';
  schoolId?: string;
  schoolName?: string;
  classId?: string;
  gradeId?: string;
  accountStatus?: 'active' | 'pending' | 'suspended' | 'temporary_approved' | 'expired';
  nationalId?: string;
  badge?: string;
  phoneNumber?: string;
  bio?: string;
  customFields?: CustomFieldDefinition[];
  customValues?: Record<string, any>;
  createdAt?: string;
  temporaryApprovalUntil?: string;
  temporaryApprovedAt?: string;
  isTemporaryApproved?: boolean;
  temporaryApprovedBy?: string;
  assistantTitle?: string;
}

export type CustomFieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'select'
  | 'date'
  | 'url'
  | 'phone'
  | 'email'
  | 'tags'
  | 'boolean';

export type CustomFieldCategory = 'personal' | 'academic' | 'contact' | 'skills' | 'custom';

export interface CustomFieldDefinition {
  id: string;
  key: string;
  label: string;
  type: CustomFieldType;
  category: CustomFieldCategory;
  placeholder?: string;
  options?: string[];
  required?: boolean;
  iconName?: string;
  helperText?: string;
  isDefaultPreset?: boolean;
  defaultValue?: any;
}

export interface UserProfile {
  id: string;
  fullName: string;
  username: string;
  email: string;
  role: UserRole;
  schoolId?: string;
  schoolName?: string;
  classId?: string;
  gradeId?: string;
  phoneNumber?: string;
  bio?: string;
  customFields?: CustomFieldDefinition[];
  customValues?: Record<string, any>;
  accountStatus: 'active' | 'pending' | 'suspended' | 'temporary_approved' | 'expired';
  avatarUrl?: string;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt?: string;
  temporaryApprovalUntil?: string;
  temporaryApprovedAt?: string;
  isTemporaryApproved?: boolean;
  temporaryApprovedBy?: string;
  assistantTitle?: string;
}

export type StudyRoomType = 'فصل' | 'مادة' | 'مراجعة اختبار' | 'دعم دراسي' | 'موهوبين' | 'برمجة وابتكار';

export interface StudyRoomMember {
  roomId: string;
  userId: string;
  fullName?: string;
  username?: string;
  memberRole: 'owner' | 'supervisor' | 'member';
  joinedAt: string;
  isMuted: boolean;
  isBanned: boolean;
  avatarUrl?: string;
}

export interface StudyRoomItem {
  id: string;
  schoolId: string;
  roomName: string;
  roomType: StudyRoomType;
  subjectId?: string;
  subject?: string;
  gradeId?: string;
  grade?: string;
  classId?: string;
  createdBy: string;
  createdByName?: string;
  supervisorId?: string;
  supervisorName?: string;
  status: 'active' | 'archived' | 'locked';
  membersCount: number;
  icon?: string;
  description?: string;
  createdAt: string;
  expiresAt?: string;
  members?: StudyRoomMember[];
}

export type EducationalStage = 'primary' | 'middle' | 'secondary' | 'kindergarten' | 'all';
export type SchoolGender = 'boys' | 'girls' | 'mixed';
export type SchoolEducationType = 'حكومي' | 'أهلي' | 'عالمي' | 'تحفيظ قرآن' | 'تربية خاصة' | 'أخرى';
export type SchoolStage = 'ابتدائي' | 'متوسط' | 'ثانوي' | 'مجمع تعليمي' | 'روضة';
export type SchoolStatus = 'pending_review' | 'active' | 'suspended';

export interface SchoolServiceItem {
  id: string;
  name: string;
  nameEn?: string;
  category: 'academic' | 'communication' | 'ai' | 'administrative' | 'security' | 'counseling';
  description: string;
  iconName?: string;
  isEnabled: boolean;
  activatedAt?: string;
  planLevel?: 'basic' | 'pro' | 'enterprise';
  priceLabel?: string;
}

export interface SchoolTenant {
  id: string;
  name: string;
  nameEn: string;
  slug: string;
  logoText: string;
  badge: string;
  primaryColor: string;
  accentColor: string;
  motto: string;
  location: string;
  gender?: SchoolGender; // boys, girls, mixed
  educationType?: SchoolEducationType; // حكومي, أهلي, عالمي, تحفيظ قرآن, تربية خاصة, أخرى
  stage?: SchoolStage; // ابتدائي, متوسط, ثانوي, مجمع تعليمي, روضة
  regionId?: string;
  regionName?: string;
  governorateId?: string;
  governorateName?: string;
  cityId?: string;
  cityName?: string;
  district?: string;
  shortNationalAddress?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  educationDirectorate?: string;
  moeCode?: string; // الرقم الوزاري إن توفر
  officialEmail?: string;
  phone?: string;
  status?: SchoolStatus; // pending_review, active, suspended
  invitationCode?: string; // Unique, e.g. SCH-K7P4X9
  referenceNumber?: string; // Unique, e.g. INV-2026-000041
  registrationCodeUsed?: string;
  isApproved?: boolean;
  principalName?: string;
  principalEmail?: string;
  totalStudentsCount?: number;
  totalTeachersCount?: number;
  enabledServices?: string[]; // list of active service ids
  customServices?: SchoolServiceItem[]; // custom or toggled services for this school
  circulars: SchoolCircular[];
}

export type School = SchoolTenant;

export interface SchoolRadarNode {
  id: string;
  name: string;
  nameEn?: string;
  region: string;
  city: string;
  district?: string;
  stage: 'ابتدائي' | 'متوسط' | 'ثانوي' | 'مجمع تعليمي' | 'روضة';
  educationType: 'حكومي' | 'أهلي' | 'عالمي' | 'تحفيظ قرآن' | 'تربية خاصة';
  gender: 'boys' | 'girls' | 'mixed';
  moeCode: string;
  principalName?: string;
  officialEmail?: string;
  phone?: string;
  latitude: number;
  longitude: number;
  radarAngle: number; // 0 - 360 degrees on radar display
  radarRadius: number; // 15 - 90 percentage from radar center
  signalStrength: number; // 60 - 100%
  pingLatencyMs: number; // 8 - 45 ms
  linkStatus: 'linked' | 'available' | 'pending';
  linkedSince?: string;
  totalStudents: number;
  totalTeachers: number;
  activeSharedRoomsCount: number;
  sharedResourcesCount: number;
  motto?: string;
  logoText?: string;
  badge?: string;
  isFlagship?: boolean;
}

export interface SchoolLinkConnection {
  id: string;
  sourceSchoolId: string;
  sourceSchoolName: string;
  targetSchoolId: string;
  targetSchoolName: string;
  status: 'active' | 'pending' | 'paused';
  establishedAt: string;
  channelsEnabled: {
    sharedBroadcast: boolean;
    studyCircles: boolean;
    questionBank: boolean;
    jointCounseling: boolean;
  };
  totalExchangesCount: number;
}

export interface SchoolBroadcastMessage {
  id: string;
  senderSchoolId: string;
  senderSchoolName: string;
  senderName: string;
  title: string;
  content: string;
  urgency: 'normal' | 'high' | 'urgent';
  targetRegions: string[];
  sentAt: string;
  receivedCount: number;
}

export type SchoolLinkStatus = 'draft' | 'sent' | 'pending' | 'linked' | 'active' | 'suspended';

export type SchoolInvitationStatus = 'draft' | 'sent' | 'pending' | 'linked' | 'active' | 'suspended' | 'viewed' | 'registered' | 'verified' | 'activated';

export interface RealSchoolStats {
  schoolId: string;
  realDbId?: string;
  studentsCount: number;
  activeStudentsCount: number;
  teachersCount: number;
  activeTeachersCount: number;
  classesCount: number;
  parentsCount: number;
  activeUsersCount: number;
  totalUsersCount: number;
  activationRate: number;
  studentActivationRate: number;
  teacherActivationRate: number;
  principalName: string | null;
  principalUserId: string | null;
  attendanceRate: number | null;
  lastActivity: string | null;
  linkStatus: SchoolLinkStatus;
}

export interface SchoolInvitation {
  id: string;
  schoolId: string;
  schoolName: string;
  invitationCode: string; // e.g. SCH-7K9P2X
  referenceNumber: string; // e.g. INV-2026-000124
  status: SchoolInvitationStatus;
  recipientEmail?: string;
  recipientPhone?: string;
  center?: string;
  district?: string;
  notes?: string;
  sentAt?: string;
  viewedAt?: string;
  registeredAt?: string;
  verifiedAt?: string;
  activatedAt?: string;
  expiresAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PlatformLetterSettings {
  founderName: string;
  founderTitle: string;
  founderSubtitle: string;
  organizationName: string;
  contactEmail: string;
  contactWebsite: string;
  officialDisclaimer: string;
}

export interface SchoolRegistrationCode {
  id: string;
  code: string;
  schoolNameAssigned?: string;
  createdDate: string;
  status: 'نشط' | 'مستخدم' | 'معطل';
  usedBySchoolId?: string;
  usedAtDate?: string;
  cityRegion: string;
  roleTarget?: 'school_admin' | 'teacher' | 'student' | 'assistant' | 'all';
  isTemporary?: boolean;
  temporaryDurationDays?: number;
  temporaryValidityDays?: number;
}

export interface TemporaryApprovalRecord {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  nationalId?: string;
  schoolId: string;
  schoolName: string;
  role: UserRole;
  assistantTitle?: string;
  status: 'pending' | 'temporary_approved' | 'active' | 'suspended' | 'expired';
  approvalType: 'none' | 'temporary' | 'permanent';
  temporaryApprovalUntil?: string;
  temporaryApprovedAt?: string;
  temporaryApprovedBy?: string;
  notes?: string;
  requestedAt: string;
  details?: string;
}

export interface BulkStudentRow {
  id: string;
  fullName: string;
  nationalId: string;
  grade: string;
  section: string;
  parentPhone: string;
  status: 'valid' | 'duplicate_id' | 'missing_info';
  generatedStudentId?: string;
  generatedPasscode?: string;
}

export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  hint: string;
  explanation: string;
}

export interface TextbookCitation {
  bookName: string;
  grade: string;
  term: string;
  pageNumber: number;
  unitName: string;
  lessonName: string;
}

export interface SolverStep {
  stepNumber: number;
  title: string;
  explanation: string;
  mathFormula?: string;
}

export interface ThreeDPart {
  id: string;
  name: string;
  description: string;
  function: string;
  position: [number, number, number];
  color?: string;
}

export interface ThreeDModelInfo {
  id: string;
  title: string;
  category: 'biology' | 'chemistry' | 'physics' | 'geography' | 'math';
  summary: string;
  parts: ThreeDPart[];
  hasHeartbeatAnimation?: boolean;
  modelType: 'heart' | 'cell' | 'molecule' | 'motor' | 'dna' | 'earth';
}

export interface ProblemSolverResult {
  question: string;
  subject: string;
  difficulty: 'سهل' | 'متوسط' | 'متقدم';
  steps: SolverStep[];
  finalAnswer: string;
  keyConcept: string;
  textbookCitation?: TextbookCitation;
  practiceQuestions: PracticeQuestion[];
  threeDModel?: ThreeDModelInfo;
}

export interface CheckQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface PageExercise {
  exerciseNumber: string;
  question: string;
  solution: string;
  keyFormula?: string;
}

export interface PageQuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface BookPageAnalysisResult {
  bookTitle: string;
  subject: string;
  grade: string;
  pageNumber: number;
  unitName: string;
  lessonTitle: string;
  pageHeading: string;
  pageTextContent: string;
  pageSummary: string;
  keyConceptsAndLaws: string[];
  solvedExercises: PageExercise[];
  practiceQuiz: {
    quizTitle: string;
    questions: PageQuizQuestion[];
  };
  threeDModel?: ThreeDModelInfo;
}

export interface HomeworkCitation {
  id: string;
  title: string;
  subject: string;
  sourceType: 'curriculum' | 'external';
  bookName?: string;
  chapterName?: string;
  lessonName?: string;
  externalTopic?: string;
  creationMethod: 'manual' | 'ai';
  dueDate: string;
  totalPoints: number;
  description: string;
  questions?: string[];
}

export interface TeacherChatMessage {
  id: string;
  sender: 'student' | 'teacher';
  text: string;
  timestamp: string;
  checkQuestion?: CheckQuestion;
  suggestedPrompts?: string[];
  homeworkCitation?: HomeworkCitation;
  threeDModel?: ThreeDModelInfo;
}

export interface CurriculumLesson {
  id: string;
  title: string;
  pageStart: number;
  pageEnd: number;
  topics: string[];
}

export interface CurriculumChapter {
  id: string;
  title: string;
  pageStart?: number;
  pageEnd?: number;
  topics?: string[];
  pdfUrl?: string;
  lessons?: CurriculumLesson[];
}

export interface CurriculumUnit {
  id: string;
  unitNumber: number;
  title: string;
  chapters: CurriculumChapter[];
}

export interface StudentBookProgress {
  bookId: string;
  studentId: string;
  schoolId?: string;
  completedLessons: number;
  totalLessons: number;
  progressPercentage: number;
  lastLessonId?: string;
  lastLessonTitle?: string;
  lastUnitTitle?: string;
  lastOpenedAt?: string;
  lessonStatusMap?: Record<string, 'not_started' | 'in_progress' | 'completed'>;
}

export interface CurriculumBook {
  id: string;
  title: string; // book_name or title
  book_name?: string;
  subject: string; // subject_name
  subject_name?: string;
  grade: string;
  stage: EducationalStage; // education_stage
  education_stage?: EducationalStage;
  term: 1 | 2 | 3; // semester
  semester?: 1 | 2 | 3;
  academic_year?: string;
  editionYear: string;
  cover_image_url?: string;
  book_pdf_url?: string;
  source_url?: string;
  source_type?: 'official_moe' | 'ien_portal' | 'madrasati' | 'school_upload';
  portalUrl?: string;
  is_active: boolean;
  coverIcon: string;
  totalPages: number;
  track?: 'المسار العام' | 'مسار الصحة والحياة' | 'مسار الهندسة والحاسب' | 'مسار إدارة الأعمال' | 'المسار الشرعي';
  isLatestSync?: boolean;
  chapters: CurriculumChapter[];
  units?: CurriculumUnit[];
  versionHistoryId?: string; // Tracks archived previous versions
}

export interface LessonPageRecord {
  id?: string;
  book_id?: string;
  lesson_id?: string;
  page_number: number;
  page_text: string;
  page_image_url?: string;
  extraction_status?: 'pending' | 'completed' | 'failed' | 'manual';
  extracted_at?: string;
}

export interface SmartPageSummary {
  title: string;
  keyPoints: string[];
  concepts: string[];
  laws?: string[];
  conclusion: string;
}

export interface SmartPageExerciseItem {
  id: string;
  exerciseNumber: string;
  question: string;
  solution: string;
  hint: string;
  explanation: string;
  similarQuestion: string;
}

export interface SmartPageQuizQuestion {
  id: string;
  type: 'mcq' | 'true_false' | 'fill_blank' | 'short_answer' | 'problem';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface SmartPageQuiz {
  quizTitle: string;
  totalQuestions: number;
  questions: SmartPageQuizQuestion[];
}

export interface SmartPageFlashcard {
  front: string;
  back: string;
}

export interface SmartPageVocabulary {
  term: string;
  definition: string;
  context?: string;
}

export interface CurriculumSyncLog {
  id: string;
  timestamp: string;
  title: string;
  source: string;
  status: 'تم التحديث' | 'مستقر' | 'قيد المزامنة';
  details: string;
  bookId?: string;
}

export interface CurriculumSyncStatus {
  lastSyncTime: string;
  portalSources: string[];
  currentAcademicYear: string;
  activeTerm: 1 | 2 | 3;
  syncedBooksCount: number;
  syncLogs: CurriculumSyncLog[];
}

export interface TicketMessage {
  id: string;
  ticketId?: string;
  senderId?: string;
  senderRole: UserRole;
  senderName: string;
  senderAvatar?: string;
  text: string;
  timestamp: string;
  attachmentName?: string;
  attachmentUrl?: string;
}

export interface SupportTicket {
  id: string;
  schoolId?: string;
  ticketNumber?: string;
  userId?: string;
  studentName: string;
  grade: string;
  category: 'استفسار أكاديمي' | 'طلب مستندات رسمية' | 'إرشاد نفسي وتربوي' | 'شكوى/اقتراح' | 'الدعم الفني والمنصة';
  subject: string;
  status: 'جديد' | 'قيد المعالجة' | 'مكتمل' | 'مغلق';
  createdAt: string;
  lastUpdated: string;
  priority: 'عاجل' | 'متوسط' | 'عادي';
  assignedTo?: string;
  messages: TicketMessage[];
}

export type ConversationType = 'direct' | 'group' | 'administrative' | 'counseling' | 'parent_teacher';

export interface ConversationMember {
  id: string;
  conversationId: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  userAvatar?: string;
  joinedAt: string;
  lastReadAt?: string;
}

export interface DirectMessage {
  id: string;
  conversationId: string;
  schoolId?: string;
  senderId: string;
  senderName: string;
  senderRole: UserRole;
  senderAvatar?: string;
  text: string;
  timestamp: string;
  attachmentUrl?: string;
  attachmentName?: string;
  problemCitation?: {
    question: string;
    finalAnswer: string;
    bookName: string;
    page: number;
  };
  homeworkCitation?: HomeworkCitation;
  isDeleted?: boolean;
  deletedBy?: string;
  isFlagged?: boolean;
}

export interface SchoolConversation {
  id: string;
  schoolId: string;
  conversationType: ConversationType;
  title: string;
  createdBy: string;
  createdByName?: string;
  createdByRole?: UserRole;
  createdAt: string;
  updatedAt: string;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  members: ConversationMember[];
}

export interface StudyGroupMessage {
  id: string;
  groupId: string;
  schoolId?: string;
  senderId?: string;
  senderName: string;
  senderAvatar: string;
  senderRole: UserRole;
  text: string;
  timestamp: string;
  isDeleted?: boolean;
  deletedBy?: string;
  isFlagged?: boolean;
  problemCitation?: {
    question: string;
    finalAnswer: string;
    bookName: string;
    page: number;
  };
  homeworkCitation?: HomeworkCitation;
  attachmentUrl?: string;
  attachmentName?: string;
}

export interface StudyGroup {
  id: string;
  name: string;
  subject: string;
  grade: string;
  membersCount: number;
  icon: string;
  description: string;
}

export interface ModerationAuditLogItem {
  id: string;
  timestamp: string;
  actorName: string;
  actorRole?: UserRole;
  action: 'حذف رسالة' | 'حذف رسالة مخالفة' | 'إخفاء محتوى' | 'تنبيه فلترة آلية' | 'تقييد نشر الطالب' | 'تحديث منهج من بوابة عين' | 'إغلاق تكت استفسار';
  targetUser?: string;
  details: string;
  severity: 'عالي' | 'متوسط' | 'منخفض';
}

export interface HomeworkAssignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  totalPoints: number;
  status: 'pending' | 'submitted' | 'graded';
  score?: number;
  feedback?: string;
  schoolSlug: string;
  gradeLevel: string;
  description: string;
  textbookPage?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizItem {
  id: string;
  title: string;
  subject: string;
  durationMinutes: number;
  status: 'available' | 'completed';
  score?: number;
  totalQuestions: number;
  questions: QuizQuestion[];
}

export interface SubjectPerformance {
  subject: string;
  scorePercentage: number;
  gradeLetter: string;
  masteryLevel: 'ممتاز' | 'جيد جداً' | 'بحاجة لدعم';
  homeworkCompleted: number;
  totalHomework: number;
}

export interface UpcomingExam {
  id: string;
  subject: string;
  date: string;
  topic: string;
  difficulty: string;
}

export interface StudentQuizResult {
  id: string;
  bookId: string;
  bookTitle: string;
  subject: string;
  grade: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  passed: boolean;
  completedAt: string;
  timeSpentSeconds: number;
  unlockedNewChallenge?: boolean;
}

export interface StudentChallengeBadge {
  id: string;
  title: string; // e.g. 'تحدي جديد'
  description?: string;
  subject: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  unlockedAt: string;
  bookTitle?: string;
  icon?: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  grade: string;
  stage: EducationalStage;
  avatar: string;
  schoolSlug: string;
  screenTimeDailyLimitMinutes: number;
  screenTimeUsedTodayMinutes: number;
  aiQuestionsCountToday: number;
  subjectsPerformance: SubjectPerformance[];
  upcomingExams: UpcomingExam[];
  aiRevisionPlan?: {
    title: string;
    description: string;
    daysCount: number;
    tasks: { day: number; title: string; completed: boolean; subject: string }[];
  };
  quizResults?: StudentQuizResult[];
  badges?: string[];
  newChallengeBadge?: StudentChallengeBadge | null;
  hasNewChallengeBadge?: boolean;
}

export interface CounselingReferral {
  id: string;
  studentName: string;
  grade: string;
  referrerName: string;
  referrerRole: 'معلم' | 'ولي أمر';
  date: string;
  category: 'أكاديمي' | 'سلوكي' | 'اجتماعي' | 'غياب وتأخر';
  priority: 'عاجل' | 'متوسط' | 'روتيني';
  status: 'جديد' | 'قيد المتابعة' | 'تم اتخاذ إجراء' | 'مغلق';
  reason: string;
  confidentialNotes: { id: string; author: string; date: string; note: string }[];
  actionPlan?: string;
}

export type CircularCategoryType = 'إداري' | 'أكاديمي' | 'اختبار' | 'حضور' | 'نشاط' | 'طارئ' | 'عام';
export type CircularAudienceType = 'all_school' | 'teachers' | 'students' | 'parents' | 'specific_grade' | 'specific_class' | 'specific_users';

export interface CircularReadConfirmation {
  id: string;
  circularId: string;
  userId: string;
  userName: string;
  userRole: UserRole;
  confirmedAt?: string;
  viewedAt?: string;
  isConfirmed: boolean;
}

export interface SchoolCircular {
  id: string;
  schoolId?: string;
  title: string;
  number?: string;
  circularNumber?: string;
  date?: string;
  priority: 'عاجل' | 'هام' | 'عادي';
  category?: 'إداري' | 'اختبارات' | 'نشاط مالي/مدرسي' | 'إرشاد طلابي';
  circularType?: CircularCategoryType;
  content: string;
  targetAudience: 'الجميع' | 'الطلاب' | 'أولياء الأمور' | 'المعلمون' | CircularAudienceType;
  targetGrade?: string;
  targetClass?: string;
  targetUserIds?: string[];
  publishDate?: string;
  expiryDate?: string;
  requiresReadConfirmation?: boolean;
  attachedDocName?: string;
  attachmentName?: string;
  attachmentUrl?: string;
  createdById?: string;
  createdByName?: string;
  createdByRole?: string;
  stats?: {
    totalRecipients: number;
    viewedCount: number;
    confirmedCount: number;
    pendingCount: number;
  };
  isAcknowledgedByMe?: boolean;
  acknowledgedAt?: string;
  createdAt?: string;
}

export interface SchoolAnnouncement {
  id: string;
  schoolId: string;
  title: string;
  content: string;
  targetAudience: 'all_school' | 'teachers' | 'students' | 'parents' | 'class';
  gradeName?: string;
  classroomName?: string;
  createdById: string;
  createdByName: string;
  createdByRole: UserRole;
  isUrgent?: boolean;
  createdAt: string;
}

export interface ParentStudentRelation {
  id: string;
  schoolId: string;
  parentId: string;
  studentId: string;
  relationshipType: 'أب' | 'أم' | 'ولي أمر' | 'كفيل';
  parentName?: string;
  parentPhone?: string;
  studentName?: string;
  studentGrade?: string;
  studentClass?: string;
  createdAt: string;
}

export interface TeacherAssignment {
  id: string;
  schoolId: string;
  teacherId: string;
  teacherName: string;
  subjectName: string;
  gradeName: string;
  classroomName: string;
  classId?: string;
  createdAt?: string;
}

export interface AppNotification {
  id: string;
  schoolId: string;
  userId: string;
  title: string;
  body: string;
  type: 'message' | 'circular' | 'announcement' | 'ticket' | 'homework' | 'quiz' | 'note' | 'room';
  targetId?: string;
  isRead: boolean;
  createdAt: string;
}

// -------------------------------------------------------------
// TEACHER OPERATIONAL SYSTEM TYPES
// -------------------------------------------------------------

export type DayOfWeek = 'الأحد' | 'الاثنين' | 'الإثنين' | 'الثلاثاء' | 'الأربعاء' | 'الخميس' | 'الجمعة' | 'السبت';

export interface ClassSchedulePeriod {
  id: string;
  schoolId: string;
  teacherId: string;
  teacherName?: string;
  gradeName: string;
  classroomName: string;
  dayOfWeek: DayOfWeek;
  periodNumber: number; // 1 - 7
  subjectName: string;
  startTime: string; // e.g. "07:30"
  endTime: string;   // e.g. "08:15"
  room?: string;     // e.g. "مختبر العلوم 1"
  isRepeatedWeekly?: boolean;
  createdAt?: string;
}

export type StudentNoteType =
  | 'ملاحظة دراسية'
  | 'تميز'
  | 'تحسن'
  | 'واجب غير مكتمل'
  | 'ضعف في مادة'
  | 'سلوك'
  | 'حضور'
  | 'تأخر'
  | 'ملاحظة عامة';

export interface StudentNote {
  id: string;
  schoolId: string;
  studentId: string;
  studentName: string;
  teacherId: string;
  teacherName: string;
  gradeName?: string;
  classroomName?: string;
  noteType: StudentNoteType;
  title: string;
  content: string;
  subjectName?: string;
  importanceLevel: 'عادي' | 'هام' | 'عاجل';
  isParentVisible: boolean;
  isStudentVisible: boolean;
  isAdminOnly: boolean;
  createdAt: string;
}

export type AttendanceStatus =
  | 'حاضر'
  | 'غائب'
  | 'غائب بعذر'
  | 'متأخر'
  | 'present'
  | 'absent'
  | 'excused'
  | 'late';

export interface AttendanceRecord {
  id: string;
  schoolId: string;
  teacherId: string;
  teacherName?: string;
  gradeName: string;
  classroomName: string;
  date: string; // YYYY-MM-DD
  periodNumber: number;
  studentId: string;
  studentName: string;
  status: AttendanceStatus;
  notes?: string;
  createdAt?: string;
}

export interface TeacherQuizQuestion {
  id: string;
  question?: string;
  questionText?: string;
  options: string[];
  correctAnswer?: number;
  correctAnswerIndex?: number;
  points: number;
  explanation?: string;
}

export interface TeacherQuiz {
  id: string;
  schoolId: string;
  teacherId: string;
  teacherName?: string;
  gradeName: string;
  classroomName: string;
  subjectName: string;
  title: string;
  description?: string;
  examDate: string; // YYYY-MM-DD
  examTime?: string; // HH:MM
  durationMinutes: number;
  totalPoints: number;
  questions: TeacherQuizQuestion[];
  isPublished: boolean;
  createdAt: string;
}

export type CommunicationTargetType =
  | 'class_announcement'
  | 'student_msg'
  | 'parent_msg'
  | 'homework_alert'
  | 'quiz_alert';

export interface TeacherCommunication {
  id: string;
  schoolId: string;
  teacherId: string;
  teacherName: string;
  targetType: CommunicationTargetType;
  gradeName: string;
  classroomName: string;
  targetId?: string; // studentId or parentId
  targetName?: string;
  title: string;
  content: string;
  isUrgent?: boolean;
  createdAt: string;
}

export interface TeacherPermissions {
  canAddStudent: boolean;
  canEditStudent: boolean;
  canManageSchedule: boolean;
  canRecordAttendance: boolean;
  canAddNotes: boolean;
  canCreateHomework: boolean;
  canCreateQuizzes: boolean;
  canMessageParents: boolean;
}

export type AppreciationRecipientType = 'student' | 'female_student' | 'teacher' | 'female_teacher' | 'parent' | 'general';

export type AppreciationTheme = 'gold_royal' | 'emerald_green' | 'navy_academic' | 'purple_luxury' | 'rose_elegant' | 'maroon_classic';

export type AppreciationIssuerType = 'teacher' | 'principal' | 'school_admin' | 'school';

export type AppreciationCertificateStatus = 'approved' | 'issued' | 'pending_approval' | 'draft' | 'revoked' | 'archived';

export type AppreciationReasonCategory =
  | 'academic_excellence'
  | 'behavior_attendance'
  | 'quran_memorization'
  | 'teacher_dedication'
  | 'female_teacher_honor'
  | 'teachers_day'
  | 'innovation_creativity'
  | 'exam_perfection'
  | 'homework_commitment'
  | 'school_activity'
  | 'custom';

export interface AppreciationLetter {
  id: string;
  recipientType: AppreciationRecipientType;
  recipientName: string;
  recipientGender?: 'male' | 'female';
  recipientClassOrSubject?: string;
  recipientId?: string;
  schoolId: string;
  schoolName: string;
  educationDirectorate?: string;
  title: string;
  reasonCategory: AppreciationReasonCategory;
  reasonDescription?: string;
  letterContent: string;
  highlightText?: string; // e.g. 'سائلين المولى له دوام التوفيق والنجاح'
  
  // Automated Issuer & Signature fields with historical snapshot integrity
  issuerType?: AppreciationIssuerType;
  issuerId?: string;
  issuerName: string;
  issuerRole: string; // e.g. 'معلم مادة العلوم', 'مدير المدرسة', 'إدارة المدرسة'
  issuerSubject?: string;
  issuerDepartment?: string;
  issuerSignatureApproved?: boolean;
  issuerSignatureTitle?: string;
  
  secondIssuerName?: string;
  secondIssuerRole?: string;
  secondIssuerApproved?: boolean;

  // School identity snapshot
  schoolLogoText?: string;
  schoolBadge?: string;
  schoolStage?: string;

  theme: AppreciationTheme;
  dateHijri?: string;
  dateGregorian: string;
  referenceCode: string;
  qrCodeData?: string;
  hasSeal: boolean;
  sealType?: 'official_school' | 'ministry_excellence' | 'golden_star' | 'emerald_shield';
  status: AppreciationCertificateStatus;

  // Teacher nomination & Principal approval workflow
  nominatedByTeacherId?: string;
  nominatedByTeacherName?: string;
  approvedByPrincipalId?: string;
  approvedByPrincipalName?: string;
  approvedAt?: string;
  rejectionReason?: string;

  isDelivered?: boolean;
  likesCount?: number;
  createdAt: string;
}

// =========================================================================
// ACHIEVEMENTS SYSTEM TYPES (نظام الإنجازات الرقمي المتكامل)
// =========================================================================

export type AchievementCategory =
  | 'academic_excellence' // تفوق دراسي
  | 'school_project' // مشروع مدرسي
  | 'scientific_experiment' // تجربة علمية
  | 'research' // بحث
  | 'programming' // برمجة
  | 'innovation' // ابتكار
  | 'talent' // موهبة
  | 'competition' // مسابقة
  | 'school_participation' // مشاركة مدرسية
  | 'volunteering' // تطوع
  | 'course_attendance' // حضور دورة
  | 'certificate' // شهادة
  | 'presentation' // عرض تقديمي
  | 'classroom_activity' // نشاط صفي
  | 'extracurricular_activity' // نشاط لاصفي
  | 'reading' // قراءة
  | 'mathematics' // رياضيات
  | 'science' // علوم
  | 'language' // لغة
  | 'technology' // تقنية
  | 'art' // فن
  | 'sports' // رياضة
  | 'teaching_strategy' // استراتيجيات التدريس (للمعلم)
  | 'professional_cert' // شهادة مهنية (للمعلم)
  | 'educational_initiative' // مبادرة تعليمية (للمعلم)
  | 'educational_content' // محتوى تعليمي مطور (للمعلم)
  | 'workshop' // ورشة عمل (للمعلم)
  | 'custom'; // إنجاز آخر يحدده المستخدم

export type AchievementApprovalStatus =
  | 'draft' // مسودة
  | 'pending_teacher' // بانتظار اعتماد المعلم
  | 'approved_teacher' // معتمد من المعلم
  | 'approved_school' // معتمد من المدرسة
  | 'needs_revision' // يحتاج تعديل
  | 'rejected'; // مرفوض

export type AchievementVisibility =
  | 'private_owner' // خاص بصاحب الحساب
  | 'student_teacher' // الطالب والمعلم
  | 'parent' // ولي الأمر
  | 'class' // الفصل
  | 'school' // المدرسة
  | 'public'; // عام

export type AchievementLevel =
  | 'school' // مدرسي
  | 'local' // محلي
  | 'national' // وطني
  | 'regional' // إقليمي
  | 'international' // دولي
  | 'other'; // أخرى

export type StudentTierStage =
  | 'early_struggle' // التعثر المبكر
  | 'needs_followup' // الحاجة للمتابعة
  | 'improving' // التحسن
  | 'excellence' // التميز
  | 'talents'; // المواهب

export type NominationType = 'none' | 'excellence' | 'talent';

export interface AchievementMedia {
  id: string;
  achievementId: string;
  fileUrl: string;
  fileType: 'image' | 'pdf' | 'video';
  fileName: string;
  fileSize?: number;
  isMain?: boolean;
  displayOrder?: number;
  caption?: string;
  createdAt: string;
}

export interface AchievementParticipant {
  id: string;
  achievementId: string;
  studentId: string;
  studentName: string;
  roleInProject?: string; // قائد فريق، عضو مشارك، مبرمج، باحث، مصمم
  className?: string;
  createdAt: string;
}

export interface AchievementCertificate {
  id: string;
  certificateNumber: string; // e.g. CERT-2026-94821
  achievementId: string;
  recipientId: string;
  recipientName: string;
  recipientType: 'student' | 'teacher';
  achievementTitle: string;
  achievementCategory: string;
  schoolId: string;
  schoolName: string;
  approverName: string;
  approverRole: string;
  issueDate: string;
  qrCodeData: string;
  schoolLogoText?: string;
  sealType?: string;
  createdAt: string;
}

export interface AchievementBadge {
  id: string;
  studentId: string;
  studentName: string;
  badgeKey:
    | 'researcher' // باحث صغير
    | 'creative' // مبدع
    | 'coder' // مبرمج
    | 'scientist' // عالم المستقبل
    | 'reader' // قارئ متميز
    | 'collaborative' // متعاون
    | 'talented' // موهوب
    | 'innovator' // مبتكر
    | 'punctual' // منتظم
    | 'team_leader'; // قائد فريق
  badgeTitle: string;
  badgeIcon: string;
  awardedById: string;
  awardedByName: string;
  awardedByRole: string;
  achievementId?: string;
  reason?: string;
  createdAt: string;
}

export interface AchievementComment {
  id: string;
  achievementId: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  content: string;
  commentType: 'congratulation' | 'revision_note' | 'general';
  createdAt: string;
}

export interface AchievementRecord {
  id: string;
  schoolId: string;
  creatorId: string;
  creatorRole: UserRole;
  targetType: 'student' | 'teacher' | 'group' | 'class' | 'school';
  
  // Student Context
  studentId?: string;
  studentName?: string;
  
  // Teacher Context
  teacherId?: string;
  teacherName?: string;

  // Main Info
  title: string;
  description: string;
  category: AchievementCategory;
  customCategory?: string;
  subject?: string;
  subjectId?: string;
  grade?: string;
  classId?: string;
  className?: string;
  term?: string; // الفصل الدراسي الأول، الثاني، الثالث
  academicYear?: string; // 1447هـ / 2026م
  achievementDate: string;
  achievementLevel: AchievementLevel;
  outcomeResult?: string; // نتيجة، درجات، مركز
  prizeAward?: string; // جائزة أو تكريم إن وجد
  
  // Media & Attachments
  mainImageUrl?: string;
  media: AchievementMedia[];
  participants: AchievementParticipant[];
  externalLinks?: string[];
  videoUrl?: string;

  // Approvals & Workflow
  approvalStatus: AchievementApprovalStatus;
  approvedById?: string;
  approvedByName?: string;
  approvedByRole?: string;
  approvedAt?: string;
  approvalNotes?: string;
  approvedForSchoolPublish: boolean; // نشر رسمي باسم المدرسة

  // Visibility & Privacy
  visibility: AchievementVisibility;

  // Talent & Excellence Nomination
  nominationType: NominationType;
  nominationStatus: 'none' | 'pending' | 'approved' | 'rejected';
  nominationNotes?: string;

  // Certificates & Badges linked
  certificateId?: string;
  certificate?: AchievementCertificate;
  badges?: AchievementBadge[];
  comments?: AchievementComment[];

  createdAt: string;
  updatedAt: string;
}

// =========================================================================
// PARENT PORTAL TYPES & INTERFACES
// =========================================================================

export type ParentRelationship = 'father' | 'mother' | 'guardian';
export type ParentLinkRequestStatus = 'pending' | 'approved' | 'rejected';
export type ParentMeetingType = 'in_person' | 'phone' | 'online';
export type ParentMeetingStatus = 'pending' | 'approved' | 'rejected' | 'completed';

export interface ParentLinkRequest {
  id: string;
  parentUserId: string;
  parentEmail?: string;
  parentName: string;
  parentPhone?: string;
  studentId: string;
  studentName?: string;
  studentNumber?: string;
  schoolId: string;
  schoolName?: string;
  gradeName?: string;
  classroomName?: string;
  relationship: ParentRelationship;
  status: ParentLinkRequestStatus;
  rejectionReason?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  createdAt: string;
}

export interface LinkedChild {
  id: string;
  studentId: string;
  schoolId: string;
  schoolName?: string;
  schoolPhone?: string;
  fullName: string;
  studentNumber: string;
  gradeName: string;
  classroomName: string;
  relationship: ParentRelationship;
  avatar?: string;
  avatarUrl?: string;
  email?: string;
  parentPhone?: string;
  academicYear?: string;
  linkedAt: string;
}

export interface ParentMeetingRequest {
  id: string;
  schoolId: string;
  schoolName?: string;
  parentUserId: string;
  parentName: string;
  parentPhone?: string;
  studentId: string;
  studentName: string;
  teacherId?: string;
  teacherName?: string;
  targetRole: 'teacher' | 'counselor' | 'principal' | 'vice_principal';
  subject: string;
  meetingType: ParentMeetingType;
  preferredDate: string;
  preferredTime?: string;
  notes?: string;
  status: ParentMeetingStatus;
  schoolResponse?: string;
  createdAt: string;
}


