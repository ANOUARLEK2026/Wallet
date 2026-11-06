/* MyWallet — الطبقة العربية + الحركة. البيانات المخزّنة تبقى بمفاتيح إنجليزية (توافق CSV/JSON) */
const LOC="ar-DZ";
(()=>{
const D=Object.fromEntries(`MyWallet|محفظتي
Balance|الرصيد
Income|الدخل
Expenses|المصروفات
Expense|مصروف
Saving rate|نسبة الادخار
Avg / day|المتوسط يومياً
Budget alerts|تنبيهات الميزانية
Last 6 months|آخر 6 أشهر
By category|حسب الفئة
Out|صرف
In|دخل
Snapshot|لمحة
Search note, category, amount…|ابحث في الملاحظة أو الفئة أو المبلغ…
All types|كل الأنواع
All categories|كل الفئات
Income vs expenses|الدخل مقابل المصروفات
Categories|الفئات
Spending by weekday|الصرف حسب اليوم
Cumulative balance|الرصيد التراكمي
Biggest expenses|أكبر المصروفات
Not enough data|بيانات غير كافية
No data|لا توجد بيانات
No expenses|لا توجد مصروفات
This month|هذا الشهر
Last 30 days|آخر 30 يوماً
Last 90 days|آخر 90 يوماً
Last 12 months|آخر 12 شهراً
This year|هذه السنة
All time|كل الفترات
Recurring (monthly)|المتكررة (شهرياً)
Recurring|متكرر
Edit budgets|تعديل الميزانيات
+ Add|+ إضافة
Export CSV|تصدير CSV
Opens in Excel / Sheets|يُفتح في Excel / Sheets
Export|تصدير
Export report (PDF)|تصدير تقرير (PDF)
Uses the Print → Save as PDF dialog|عبر الطباعة ← حفظ كملف PDF
Open|فتح
Full backup (JSON)|نسخة احتياطية كاملة (JSON)
Transactions, budgets, recurring|المعاملات والميزانيات والمتكررات
Save|حفظ
Import CSV|استيراد CSV
Same columns as MyWallet desktop|بنفس أعمدة نسخة سطح المكتب
Choose|اختيار
Restore backup|استعادة نسخة
From a JSON backup or a snapshot|من ملف JSON أو لقطة تلقائية
Restore|استعادة
Currency|العملة
Shown next to amounts|تظهر بجانب المبالغ
Clear all transactions|مسح كل المعاملات
Clear|مسح
No snapshot yet|لا توجد لقطة بعد
Smart amount cheat-sheet|دليل المبالغ الذكية
Start with|ابدأ بـ
for income (|للدخل (
) or|) أو
for an expense.|للمصروف.
Notes you used before fill the category and amount for you.|الملاحظات التي استخدمتها سابقاً تملأ الفئة والمبلغ تلقائياً.
MyWallet Mobile 4.0 · all data stays on this phone|محفظتي 4.0 · كل بياناتك تبقى على هاتفك
Amount|المبلغ
Add|إضافة
Note|ملاحظة
Today|اليوم
Yesterday|أمس
Yest.|أمس
No account|بدون حساب
Unassigned|غير مرتبط
Home|الرئيسية
History|السجل
Stats|الإحصاء
Wealth|الثروة
Plan|التخطيط
More|المزيد
Category|الفئة
Type|النوع
Delete|حذف
Account|الحساب
Date|التاريخ
Cancel|إلغاء
Close|إغلاق
Apply|تطبيق
Duplicate|تكرار
Edit transaction|تعديل المعاملة
Monthly budgets|الميزانيات الشهرية
Leave 0 for no limit.|اترك 0 لعدم وضع حد.
New recurring item|عنصر متكرر جديد
Day of month|يوم الشهر
Starting|ابتداءً من
Rent, Netflix, Salary…|إيجار، اشتراك، راتب…
＋ New category…|＋ فئة جديدة…
New category name|اسم الفئة الجديدة
Delete rule|حذف القاعدة
Restore|استعادة
From a backup file…|من ملف نسخة احتياطية…
Nothing here yet.|لا شيء هنا بعد.
Type an amount below and press Add.|اكتب مبلغاً بالأسفل واضغط إضافة.
No budgets yet.|لا توجد ميزانيات بعد.
Tap “Edit budgets”.|اضغط «تعديل الميزانيات».
No recurring items (rent, salary, subscriptions…)|لا عناصر متكررة (إيجار، راتب، اشتراكات…)
✓ All budgets on track|✓ كل الميزانيات في المسار
Projected spending this month|الصرف المتوقع هذا الشهر
Transactions|المعاملات
Top category|أعلى فئة
Biggest expense|أكبر مصروف
Spent so far this month|المصروف حتى الآن هذا الشهر
Daily average|المتوسط اليومي
Average expense|متوسط المصروف
No-spend days|أيام بلا صرف
Priciest weekday|أغلى يوم
spending|صرف
Mon|الاثنين
Tue|الثلاثاء
Wed|الأربعاء
Thu|الخميس
Fri|الجمعة
Sat|السبت
Sun|الأحد
Food|الطعام
Transport|المواصلات
Housing|السكن
Bills|الفواتير
Shopping|التسوق
Entertainment|الترفيه
Health|الصحة
Education|التعليم
Salary|الراتب
Other|أخرى
Freelance|عمل حر
Business|تجارة
Gift|هدية
Investment|استثمار
Debt payment|سداد دين
Debt collected|تحصيل دين
Overview|نظرة عامة
Accounts|الحسابات
Assets|الأصول
Debts|الديون
Goals|الأهداف
Net worth|صافي الثروة
Total assets|إجمالي الأصول
Liabilities|الالتزامات
Liquid cash|السيولة
Debt / assets|الدين / الأصول
What you own|ما تملكه
Cash & bank|نقد وبنك
Investment accts|حسابات استثمار
Owed to you|مستحق لك
Net worth over time|تطور صافي الثروة
History builds automatically, one point per month.|يُبنى السجل تلقائياً بنقطة كل شهر.
Position|الوضع المالي
Monthly income (avg)|متوسط الدخل الشهري
Monthly spending (avg)|متوسط الصرف الشهري
Cash runway|مدة كفاية السيولة
Debt-free date|موعد التحرر من الديون
Goals saved|المدّخر للأهداف
not on schedule|خارج الجدول
no debts|لا ديون
⇄ Transfer|⇄ تحويل
Transfer between accounts|تحويل بين الحسابات
From|من
To|إلى
Name|الاسم
Opening balance (can be negative)|الرصيد الافتتاحي (قد يكون سالباً)
CCP, Cash at home, Bank…|بريد الجزائر CCP، نقد بالبيت، بنك…
Recent transfers|آخر التحويلات
Cash|نقد
Bank|بنك
Savings|ادخار
Wallet|محفظة
Property|عقار
Vehicle|مركبة
Gold|ذهب
Stocks|أسهم
Crypto|عملات رقمية
Bank loan|قرض بنكي
Credit card|بطاقة ائتمان
Mortgage|قرض عقاري
Car loan|قرض سيارة
Personal loan|قرض شخصي
Edit account|تعديل حساب
New account|حساب جديد
Edit asset|تعديل أصل
New asset|أصل جديد
Apartment, Car, Gold 50g…|شقة، سيارة، ذهب 50غ…
What you paid (cost)|ما دفعته (التكلفة)
Current value|القيمة الحالية
Total cost|إجمالي التكلفة
Gain / loss|الربح / الخسارة
Property, car, gold, shares, crypto…|عقار، سيارة، ذهب، أسهم…
Add what you own and keep the values current.|أضف ما تملكه وحدّث قيمه باستمرار.
Edit debt|تعديل دين
New debt / loan|دين / قرض جديد
Direction|الاتجاه
I owe (liability)|عليّ (التزام)
Someone owes me (receivable)|لي عند شخص (مستحق)
Car loan, Ahmed, Visa…|قرض سيارة، أحمد، بطاقة…
Kind|النوع
Remaining balance|الرصيد المتبقي
Interest rate % per year (0 if none)|نسبة الفائدة % سنوياً (0 إن لم توجد)
Monthly payment|القسط الشهري
Due day of month (optional)|يوم الاستحقاق (اختياري)
I owe|عليّ
Owed to me|لي عند الغير
owes you|يدين لك
Pay|سداد
Received|استلام
No debts. 🎉|لا ديون. 🎉
Monthly payments|الأقساط الشهرية
Share of income|من الدخل
Payoff strategy|استراتيجية السداد
Minimums only|الحد الأدنى فقط
Avalanche +extra|الانهيار الجليدي + إضافي
Snowball +extra|كرة الثلج + إضافي
You save|توفّر
Savings goals|أهداف الادخار
Edit goal|تعديل هدف
New savings goal|هدف ادخار جديد
Goal|الهدف
Emergency fund, Hajj, New car…|صندوق طوارئ، حج، سيارة جديدة…
Target amount|المبلغ المستهدف
Saved so far|المدّخر حتى الآن
Monthly contribution (optional)|المساهمة الشهرية (اختياري)
Deadline (optional)|الموعد النهائي (اختياري)
✓ Reached|✓ تم بلوغه
Set a monthly amount or deadline for an ETA|حدّد مبلغاً شهرياً أو موعداً لتعرف الوقت المتوقع
Emergency fund, a trip, a car, a house…|صندوق طوارئ، رحلة، سيارة، بيت…
Set a target and see exactly what to save each month.|حدّد هدفاً لتعرف ما يجب ادخاره شهرياً.
Amount (negative to withdraw)|المبلغ (سالب للسحب)
Forecast|التوقعات
Budgets|الميزانيات
Tools|الأدوات
What-if scenario|سيناريو «ماذا لو»
Income change:|تغيّر الدخل:
Spending change:|تغيّر الصرف:
Assets growth per year:|نمو الأصول سنوياً:
One-off expense next month|مصروف استثنائي الشهر القادم
Also deduct scheduled debt payments (turn off if you log them as transactions)|اخصم أقساط الديون المجدولة أيضاً (أوقفه إن كنت تسجلها كمعاملات)
Expected income / mo|الدخل المتوقع / شهر
Expected spending / mo|الصرف المتوقع / شهر
Monthly surplus|الفائض الشهري
saving|ادخار
deficit|عجز
Cash then|السيولة حينها
This month spending|صرف هذا الشهر
Projected net worth|صافي الثروة المتوقع
⚠ runs out|⚠ تنفد
estimate from this month|تقدير من هذا الشهر
No recurring bills, debt dues or goal deadlines coming up.|لا فواتير أو أقساط أو مواعيد أهداف قادمة.
Add them under Budgets and Debts.|أضفها من الميزانيات والديون.
Health score|مؤشر الصحة المالية
Financial health score|مؤشر الصحة المالية
Breakdown|التفصيل
What to do next|ماذا تفعل بعد ذلك
Savings rate|نسبة الادخار
Emergency fund|صندوق الطوارئ
Debt burden|عبء الديون
Budget discipline|الالتزام بالميزانية
Net worth trend|اتجاه الثروة
Excellent|ممتاز
Good|جيد
Fair|مقبول
Needs work|يحتاج تحسيناً
no income recorded|لا دخل مسجّل
no budgets set|لا ميزانيات محددة
growing vs last month|ينمو مقارنة بالشهر الماضي
not growing vs last month|لا ينمو مقارنة بالشهر الماضي
history builds monthly|يُبنى السجل شهرياً
✓ You're doing well across the board. Keep it up.|✓ أداؤك جيد في كل الجوانب. واصل.
Aim to save 20% of income: trim your biggest flexible categories first.|اهدف لادخار 20٪ من الدخل: ابدأ بتقليص أكبر الفئات المرنة.
Build cash savings until it covers 3 to 6 months of expenses.|ابنِ مدخرات نقدية تغطي 3 إلى 6 أشهر من المصروفات.
Debt payments are heavy: use the avalanche plan in Wealth → Debts to cut interest.|أقساط الديون ثقيلة: استخدم خطة الانهيار الجليدي في الثروة ← الديون لخفض الفوائد.
Set monthly budgets (Plan → Budgets) to unlock this part of the score.|حدّد ميزانيات شهرية (التخطيط ← الميزانيات) لتفعيل هذا الجزء من المؤشر.
You're over several budgets this month: review those categories.|تجاوزت عدة ميزانيات هذا الشهر: راجع تلك الفئات.
Net worth is negative: focus on paying down high-interest debt first.|صافي الثروة سالب: ركّز على سداد الديون ذات الفائدة العالية أولاً.
Can I afford it?|هل أستطيع شراءه؟
Price|السعر
Based on your current cash and monthly surplus.|بحسب سيولتك الحالية وفائضك الشهري.
Share of your cash|نسبة من سيولتك
Months of surplus to save it|أشهر الفائض لادخاره
Cash left after buying|السيولة بعد الشراء
Runway after buying|مدة الكفاية بعد الشراء
✓ Comfortable: you keep a 3+ month cushion|✓ مريح: يبقى لديك هامش 3 أشهر فأكثر
⚠ Possible, but it thins your safety net|⚠ ممكن، لكنه يُضعف هامش الأمان
✕ You can't cover it from cash|✕ لا تستطيع تغطيته من السيولة
Loan calculator|حاسبة القروض
Loan amount|مبلغ القرض
Interest % per year|الفائدة % سنوياً
Months|عدد الأشهر
Total repaid|إجمالي المسدَّد
Total interest|إجمالي الفوائد
Savings & investment growth|نمو الادخار والاستثمار
Starting amount|المبلغ الابتدائي
Monthly deposit|الإيداع الشهري
Return % per year|العائد % سنوياً
Years|السنوات
Inflation % per year|التضخم % سنوياً
Future value|القيمة المستقبلية
You deposited|ما أودعته
Growth earned|النمو المحقق
In today's purchasing power|بقوة الشراء الحالية
Retirement planner|مخطط التقاعد
Your age|عمرك
Retire at|سن التقاعد
Saved for retirement now|المدّخر للتقاعد الآن
Monthly contribution|المساهمة الشهرية
Wanted monthly income (today's money)|الدخل الشهري المطلوب (بقيمة اليوم)
Inflation %|التضخم %
Nest egg needed (25× rule)|المبلغ المطلوب (قاعدة 25×)
Projected at retirement|المتوقع عند التقاعد
Gap|الفجوة
Monthly saving required|الادخار الشهري المطلوب
Uses the 4% rule: nest egg = 25 × yearly spending, grown with inflation.|قاعدة 4٪: المبلغ = 25 × الصرف السنوي مع التضخم.
Retirement age must be above your age|يجب أن يكون سن التقاعد أكبر من عمرك
Check the numbers|تحقق من الأرقام
Spending split · last 90 days|توزيع الصرف · آخر 90 يوماً
Needs|الاحتياجات
Wants|الرغبات
Undo|تراجع
Saved|تم الحفظ
Deleted|تم الحذف
Duplicated to today|نُسخت إلى اليوم
Budgets saved|حُفظت الميزانيات
Recurring item added|أُضيف العنصر المتكرر
Rule deleted|حُذفت القاعدة
Category updated|تم تحديث الفئة
Type updated|تم تحديث النوع
CSV exported|تم تصدير CSV
Backup saved|حُفظت النسخة الاحتياطية
Couldn't read that amount|تعذّرت قراءة المبلغ
Empty file|ملف فارغ
Not a valid MyWallet backup|ليست نسخة صالحة من محفظتي
Invalid file|ملف غير صالح
Pop-ups are blocked|النوافذ المنبثقة محظورة
Could not save — storage full?|تعذّر الحفظ — هل المساحة ممتلئة؟
Account saved|حُفظ الحساب
Account added|أُضيف الحساب
Account deleted|حُذف الحساب
Transfer recorded|سُجّل التحويل
Transfer deleted|حُذف التحويل
Delete this transfer?|حذف هذا التحويل؟
Asset saved|حُفظ الأصل
Asset added|أُضيف الأصل
Asset deleted|حُذف الأصل
Debt saved|حُفظ الدين
Debt added|أُضيف الدين
Debt deleted|حُذف الدين
Receipt recorded|سُجّل الاستلام
Payment recorded|سُجّل السداد
Goal saved|حُفظ الهدف
Goal added|أُضيف الهدف
Goal deleted|حُذف الهدف
Goal updated|حُدّث الهدف
All cleared|تم المسح بالكامل
Add at least two accounts first|أضف حسابين على الأقل أولاً
Pick two different accounts and an amount|اختر حسابين مختلفين ومبلغاً
Enter an amount|أدخل مبلغاً
Enter a target|أدخل مبلغاً مستهدفاً
Restore|استعادة
Clear all transactions?|مسح كل المعاملات؟
add|إضافة
edit|تعديل
delete|حذف
duplicate|تكرار
budgets|الميزانيات
recurring|متكرر
recurring removed|إزالة متكرر
category|الفئة
type|النوع
import|استيراد
restore|استعادة
clear|مسح
never|أبداً
done|منتهٍ
now|الآن
Theme|السمة
Needs = Housing, Bills, Food, Transport, Health, Education. Everything else counts as wants.|الاحتياجات = السكن، الفواتير، الطعام، المواصلات، الصحة، التعليم. والباقي رغبات.
Benchmark 50% needs · 30% wants · 20% savings|المعيار 50٪ احتياجات · 30٪ رغبات · 20٪ ادخار
Avalanche = highest interest first (cheapest). Snowball = smallest balance first (fastest wins).|الانهيار الجليدي = الأعلى فائدة أولاً (الأرخص). كرة الثلج = الأصغر رصيداً أولاً (أسرع إنجازاً).
Pick an account in the quick-add bar to track where each transaction lives. Net worth already includes unassigned ones.|اختر حساباً في شريط الإضافة السريعة لتتبع مكان كل معاملة. صافي الثروة يشمل غير المرتبطة أيضاً.
Transactions without an account|معاملات بلا حساب
Unassigned transactions|معاملات غير مرتبطة
App lock|قفل التطبيق
Fingerprint or phone screen lock|البصمة أو قفل شاشة الهاتف
Phone screen lock (no fingerprint set up)|قفل شاشة الهاتف (لم تُسجَّل بصمة)
Set up a fingerprint or screen lock in phone settings first|فعّل البصمة أو قفل الشاشة من إعدادات الهاتف أولاً
Available in the Android app only|متاح في تطبيق أندرويد فقط
Lock after|القفل بعد
Time away from the app|مدة الابتعاد عن التطبيق
Immediately|فوراً
30 seconds|30 ثانية
1 minute|دقيقة واحدة
5 minutes|5 دقائق
Hide in recent apps|إخفاء المحتوى في التطبيقات الأخيرة
Also blocks screenshots|ويمنع أيضاً لقطات الشاشة
Locked|التطبيق مقفل
Unlock with fingerprint|الفتح بالبصمة
Unlock MyWallet|فتح محفظتي
Confirm it's you|أكّد أنك أنت
Confirm to turn on app lock|أكّد لتفعيل قفل التطبيق
Confirm to turn off app lock|أكّد لإيقاف قفل التطبيق
App lock is on|تم تفعيل قفل التطبيق
App lock is off|تم إيقاف قفل التطبيق
Too many attempts. Try again later.|محاولات كثيرة. أعد المحاولة لاحقاً.
Could not verify. Try again.|تعذّر التحقق. حاول مرة أخرى.
Phone screen lock was removed — app lock turned off|أُزيل قفل شاشة الهاتف — تم إيقاف قفل التطبيق`.trim().split("\n").map(l=>{const i=l.indexOf("|");return[l.slice(0,i),l.slice(i+1)]}));
const R=[
[/^vs (.+)$/,m=>"مقارنة بـ \u2066"+m[1]+"\u2069"],
[/^(\d+) selected$/,m=>m[1]+" محدد"],
[/^(\d+) transactions · (.+) · net (.+)$/,m=>`${m[1]} معاملة · ${m[2]} · الصافي ${m[3]}`],
[/^Undone: (.+)$/,m=>"تم التراجع: "+tr(m[1])],
[/^Deleted (\d+)$/,m=>"تم حذف "+m[1]],
[/^Added · (\d+) due transaction\(s\) created$/,m=>`تمت الإضافة · أُنشئت ${m[1]} معاملة مستحقة`],
[/^(\d+) recurring transaction\(s\) added$/,m=>`أُضيفت ${m[1]} معاملة متكررة`],
[/^Imported (\d+) · (\d+) duplicates · (\d+) invalid$/,m=>`تم استيراد ${m[1]} · ${m[2]} مكررة · ${m[3]} غير صالحة`],
[/^Restored (\d+) transactions$/,m=>`تمت استعادة ${m[1]} معاملة`],
[/^Check “(.+)”$/,m=>`تحقق من «${tr(m[1])}»`],
[/^(.+) is required$/,m=>tr(m[1])+" مطلوب"],
[/^⚠ (.+) is over budget \((.+)\)$/,m=>`⚠ ${tr(m[1])} تجاوزت الميزانية (${m[2]})`],
[/^Last auto-snapshot (.+)$/,m=>"آخر لقطة تلقائية "+m[1]],
[/^From auto-snapshot \((.+)\)$/,m=>`من اللقطة التلقائية (${m[1]})`],
[/^Set category \((\d+)\)$/,m=>`تحديد الفئة (${m[1]})`],
[/^Mark (\d+) as…$/,m=>`تصنيف ${m[1]} كـ…`],
[/^(\d+) transactions will be removed\. You can undo right after\.$/,m=>`ستُحذف ${m[1]} معاملة. يمكنك التراجع مباشرة بعد ذلك.`],
[/^Payment: (.+)$/,m=>"دفعة: "+m[1]],[/^Received: (.+)$/,m=>"استلام: "+m[1]],[/^Goal due: (.+)$/,m=>"موعد الهدف: "+m[1]],
[/^Money received from (.+)$/,m=>"مبلغ مستلم من "+m[1]],[/^Pay (.+)$/,m=>"سداد "+m[1]],
[/^Add to “(.+)”$/,m=>`إضافة إلى «${m[1]}»`],
[/^ETA (.+)$/,m=>"الوقت المتوقع "+m[1]],
[/^(.+)\/mo needed until (.+)$/,m=>`${m[1]}/شهر مطلوب حتى ${m[2]}`],
[/^(.+)\/mo$/,m=>m[1]+"/شهر"],[/^(\d+) mo$/,m=>m[1]+" شهر"],[/^(\d+) yr$/,m=>m[1]+" سنة"],
[/^(\d+)y (\d+)m$/,m=>`${m[1]} سنة ${m[2]} شهر`],
[/^on track$/,()=>"في المسار"],[/^behind$/,()=>"متأخر"],
[/^day (\d+)$/,m=>"اليوم "+m[1]],[/^cost (.+)$/,m=>"التكلفة "+m[1]],[/^out (.+)$/,m=>"صرف "+m[1]],[/^in (.+)$/,m=>"دخل "+m[1]],
[/^interest (.+)$/,m=>"فوائد "+m[1]],[/^net (.+)$/,m=>"الصافي "+m[1]],[/^now (.+)$/,m=>"الآن "+m[1]],[/^so far (.+)$/,m=>"حتى الآن "+m[1]],
[/^of (\d+)$/,m=>"من "+m[1]],[/^(\d+) expenses$/,m=>m[1]+" مصروف"],[/^avg of last (\d+) mo$/,m=>`متوسط آخر ${m[1]} أشهر`],
[/^(\d+) months sooner$/,m=>`أبكر بـ ${m[1]} شهر`],[/^Net worth in (.+)$/,m=>"صافي الثروة بعد "+tr(m[1])],
[/^Next 30 days(.*)$/,m=>"الـ 30 يوماً القادمة"+m[1]],
[/^Assets(.*)$/,m=>"الأصول"+m[1]],
[/^(.+) months?$/,m=>m[1]+" شهر"],
[/^(.+) of spending \(goal 6\)$/,m=>m[1].replace("months","شهر")+" من الصرف (الهدف 6)"],
[/^(\d+)% \(goal 20%\+\)$/,m=>`${m[1]}٪ (الهدف 20٪+)`],
[/^(\d+)% of income goes to debt \(goal under 10%\)$/,m=>`${m[1]}٪ من الدخل تذهب للديون (الهدف أقل من 10٪)`],
[/^(\d+) of (\d+) budgets on track$/,m=>`${m[1]} من ${m[2]} ميزانيات في المسار`],
[/^⚠ Cash goes negative in (\d+) month\(s\)$/,m=>`⚠ تصبح السيولة سالبة بعد ${m[1]} شهر`],
[/^Payoff order: (.+)$/,m=>"ترتيب السداد: "+m[1]],
[/^Months of surplus to save it$/,()=>"أشهر الفائض لادخاره"]
];
function tr(s){
  if(D[s]!==undefined)return D[s];
  for(const[re,f]of R){const m=re.exec(s);if(m)return f(m)}
  let m=/^([⚠✓✕•★↻＋+−\s]+)(.+)$/.exec(s);if(m&&m[2]!==s){const r=tr(m[2]);if(r!==m[2])return m[1]+r}
  if(s.includes(" · ")){const p=s.split(" · "),q=p.map(tr);if(q.some((x,i)=>x!==p[i]))return q.join(" · ")}
  return s;
}
window.tr=tr;
window.trHtml=h=>h.replace(/>([^<>]+)</g,(a,t)=>">"+tr(t.trim())+"<");
function txt(n){
  const p=n.parentNode;if(!p||p.nodeName==="SCRIPT"||p.nodeName==="STYLE")return;
  const v=n.nodeValue;if(v===n.__t)return;
  const m=/^(\s*)([\s\S]*?)(\s*)$/.exec(v);if(!m[2])return;
  const o=m[2],r=tr(o);
  if(r!==o){if(p.nodeName==="OPTION"&&!p.hasAttribute("value"))p.setAttribute("value",o);n.nodeValue=m[1]+r+m[3]}
  n.__t=n.nodeValue;
}
function walk(e){
  if(e.nodeType===3)return txt(e);if(e.nodeType!==1)return;
  for(const a of["placeholder","title"]){const v=e.getAttribute(a);if(v){const r=tr(v);if(r!==v)e.setAttribute(a,r)}}
  e.childNodes.forEach(walk);
}
const root=document.body;walk(root);document.title="محفظتي";
new MutationObserver(ms=>{for(const m of ms){
  if(m.type==="childList")m.addedNodes.forEach(walk);
  else if(m.type==="characterData")txt(m.target);
  else walk(m.target)}
}).observe(root,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:["placeholder","title"]});

/* ---- حركة وديناميكية ---- */
const $=id=>document.getElementById(id);
const greet=()=>{const h=new Date().getHours();
  $("greet").textContent=(h<5?"طاب مساؤك":h<12?"صباح الخير":h<18?"طاب يومك":"مساء الخير")+" · "+new Date().toLocaleDateString(LOC,{weekday:"long",day:"numeric",month:"long"})};
greet();setInterval(greet,60000);
window.countUps=()=>{
  ["dBal","dInc","dExp","dAvg"].forEach(id=>{
    const e=$(id);if(!e)return;const f=e.textContent,m=/-?\d[\d,]*\.?\d*/.exec(f);if(!m)return;
    const to=parseFloat(m[0].replace(/,/g,"")),from=e.__v??0;e.__v=to;
    if(from===to||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
    const dec=(m[0].split(".")[1]||"").length,com=m[0].includes(","),t0=performance.now();cancelAnimationFrame(e.__r);
    const step=t=>{const k=Math.min(1,(t-t0)/650),v=from+(to-from)*(1-Math.pow(1-k,3));
      e.textContent=f.replace(m[0],com?v.toLocaleString("en",{minimumFractionDigits:dec,maximumFractionDigits:dec}):v.toFixed(dec));
      if(k<1)e.__r=requestAnimationFrame(step)};
    e.__r=requestAnimationFrame(step);
  });
};
/* معاينة حية للمبلغ الذكي (12k → 12,000) */
const pv=document.createElement("div");pv.id="qPrev";$("qa").appendChild(pv);
const hide=()=>setTimeout(()=>{if(!$("qAmt").value)pv.classList.remove("on")},40);
$("qAmt").addEventListener("input",e=>{let v=e.target.value.trim();if(/^[+\-−]/.test(v))v=v.slice(1);
  try{pv.textContent="= "+evaluateAmount(v).toLocaleString("en",{maximumFractionDigits:2})+" "+S.currency;pv.classList.add("on")}catch(_){pv.classList.remove("on")}});
$("qGo").addEventListener("click",hide);$("qAmt").addEventListener("keydown",e=>{if(e.key==="Enter")hide()});
/* سحب النافذة السفلية للأسفل لإغلاقها */
const sh=$("sheet");let y0=null;
sh.addEventListener("touchstart",e=>{y0=sh.scrollTop<=0?e.touches[0].clientY:null},{passive:true});
sh.addEventListener("touchmove",e=>{if(y0==null)return;const d=e.touches[0].clientY-y0;if(d>0)sh.style.transform=`translateY(${d}px)`},{passive:true});
sh.addEventListener("touchend",e=>{if(y0==null)return;const d=e.changedTouches[0].clientY-y0;sh.style.transform="";if(d>110)$("sheetBg").classList.remove("on");y0=null});
})();
