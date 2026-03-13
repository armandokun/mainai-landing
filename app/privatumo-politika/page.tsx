import Image from "next/image";
import type { Metadata } from "next";

const CREAM_WHITE = "#faf5f0";
const DARK_BG = "#191919";

export const metadata: Metadata = {
  title: "Privatumo politika – Mainai",
  description: "Mainai privatumo politika ir asmens duomenų tvarkymo sąlygos.",
};

export default function PrivatumoPage() {
  return (
    <div style={{ backgroundColor: DARK_BG, minHeight: "100dvh" }}>
      {/* Content */}
      <main className="mx-auto max-w-[745px] px-6 pb-2 pt-12 sm:px-8 md:pt-16">
        {/* Logo */}
        <div className="mb-12 md:mb-16">
          <Image
            src="/logo/logo-white.svg"
            alt="Mainai"
            width={2500}
            height={740}
            className="h-auto w-full"
          />
        </div>

        {/* Policy text */}
        <div
          className="space-y-3 text-[14px] leading-relaxed"
          style={{ fontFamily: "var(--font-solar)", color: CREAM_WHITE }}
        >
          <h1
            className="text-[27px] font-medium tracking-wide mb-5"
            style={{ fontFamily: "var(--font-solar)" }}
          >
            Privatumo Politika
          </h1>

          <section className="space-y-3">
            <h2 className="text-[14px] font-medium">
              1. BENDROSIOS NUOSTATOS
            </h2>
            <p>
              Mums rūpi Jūsų privatumas ir asmens duomenų saugumas.
              Įgyvendindami 2016 m. balandžio 27 d. Europos Parlamento ir
              Tarybos Reglamentą (ES) 2016/679 dėl fizinių asmenų apsaugos
              tvarkant asmens duomenis ir dėl laisvo tokių duomenų judėjimo
              (Bendrasis duomenų apsaugos reglamentas) (toliau – Reglamentas
              (ES) 2016/679), užtikriname Jums ypač skaidrų ir sąžiningą Jūsų
              asmens duomenų tvarkymą.
            </p>
            <p>
              Šioje privatumo politikoje galite susipažinti su savo teisėmis bei
              informacija apie Jūsų asmens duomenų tvarkymą. Jūsų asmens duomenų
              neparduosime ir nenuomosime. Visus duomenis rinksime, laikysime ir
              tvarkysime vadovaudamiesi Reglamentu (ES) 2016/679 ir neperduosime
              jokioms trečiosioms šalims, nebent tai padaryti būtume įpareigoti
              teisės aktais arba tai būtų būtina mūsų paslaugoms teikti.
            </p>
            <p>
              Jūsų asmens duomenų valdytojas yra UAB &bdquo;Padelio daržas&rdquo;, įmonės
              kodas 306978983, registruotas buveinės adresas Savanorių pr.
              178B-104, LT-03154 Vilnius, Lietuva, kontaktinis telefono Nr.{" "}
              <a href="tel:+37069131019">+37069131019</a>
              , elektroninio pašto adresas:{" "}
              <a href="mailto:labas@mainai.social">labas@mainai.social</a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[14px] font-medium">
              2. KOKIAIS TIKSLAIS, KOKIUS ASMENS DUOMENIS IR KOKIU TEISINIU
              PAGRINDU TVARKOME
            </h2>
            <p>
              Mes renkame ir toliau tvarkome asmens duomenis nustatytais
              konkrečiais tikslais ir tik tiek, kiek yra būtina šiems tikslams
              pasiekti:
            </p>
            <p>
              <strong>
                Naujienlaiškių siuntimo (tiesioginės rinkodaros) tikslu.
              </strong>{" "}
              Tam, kad galėtume Jums siųsti savo naujienas, pasiūlymus ir
              kvietimus į renginius, mes tvarkome šiuos Jūsų asmens duomenis:
              vardą, pavardę, elektroninio pašto adresą, prenumeratos datą ir
              laiką. Jūsų asmens duomenys tvarkomi Jūsų sutikimo pagrindu,
              vadovaujantis Reglamento (ES) 2016/679 6 straipsnio 1 dalies a
              punktu.
            </p>
            <p>
              <strong>Prašymų ir klausimų nagrinėjimo tikslu.</strong> Tam, kad
              galėtume teikti Jums kokybišką aptarnavimą ir atsakyti į Jūsų
              užklausas, tvarkome šiuos asmens duomenis: elektroninio pašto
              adresą, telefono numerį (jei pateikiate), paklausimo datą, laiką
              ir turinį. Jūsų asmens duomenys tvarkomi siekiant mūsų teisėtų
              interesų teikti kokybiškas paslaugas, vadovaujantis Reglamento
              (ES) 2016/679 6 straipsnio 1 dalies f punktu.
            </p>
            <p>
              <strong>
                Svetainės saugumo ir sklandaus veikimo užtikrinimo tikslu.
              </strong>{" "}
              Tam, kad apsaugotume savo interneto svetainę nuo kibernetinių
              incidentų ir analizuotume jos lankomumą, tvarkome Jūsų IP adresą,
              prisijungimo datą ir naršymo informaciją. Duomenys tvarkomi mūsų
              teisėto intereso pagrindu, vadovaujantis Reglamento (ES) 2016/679
              6 straipsnio 1 dalies f punktu.
            </p>
            <p>
              Informuojame, kad įmonė profiliavimu grindžiamų automatizuotų
              sprendimų Jūsų atžvilgiu nepriima.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[14px] font-medium">
              3. TVARKOMŲ ASMENS DUOMENŲ KILMĖ
            </h2>
            <p>
              Mes tvarkome tuos asmens duomenis, kuriuos Jūs patys mums
              pateikiate naudodamiesi mūsų interneto svetaine (pildydami
              registracijos ar užklausos formas), siųsdami elektroninius laiškus
              ar kitu būdu kreipdamiesi į mus.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[14px] font-medium">
              4. KAM PERDUODAME ASMENS DUOMENIS
            </h2>
            <p>
              Asmens duomenys yra perduodami tik patikimoms trečiosioms šalims,
              su kuriomis esame sudarę sutartis, ir tik tokia apimtimi, kuri yra
              būtina paslaugai teikti:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Naujienlaiškių siuntimo platformai &bdquo;MailerLite&rdquo;, teikiančiai
                tiesioginės rinkodaros administravimo paslaugas.
              </li>
              <li>
                Svetainės prieglobos (hostingo) ir IT sistemų priežiūros
                paslaugų teikėjams.
              </li>
              <li>
                Reklamos ir analitikos partneriams (pvz., &bdquo;Google&rdquo;, &bdquo;Meta&rdquo;), per
                svetainėje naudojamus slapukus ir sekimo technologijas.
              </li>
              <li>
                Valstybinėms institucijoms ir teisėsaugos įstaigoms, kai tokią
                pareigą numato Lietuvos Respublikos teisės aktai.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[14px] font-medium">
              5. KIEK LAIKO SAUGOMI ASMENS DUOMENYS
            </h2>
            <p>Jūsų asmens duomenis saugome:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>
                  Naujienlaiškių siuntimo (tiesioginės rinkodaros) tikslu:
                </strong>{" "}
                5 metus nuo sutikimo davimo dienos arba kol atšauksite savo
                sutikimą (atsisakysite prenumeratos). Informaciją apie duotą
                sutikimą saugosime dar 2 metus pasibaigus asmens duomenų
                tvarkymui, siekiant apginti savo teisėtus interesus.
              </li>
              <li>
                <strong>Prašymų ir klausimų nagrinėjimo tikslu:</strong> 1 metus
                po paskutinio kontakto su Jumis.
              </li>
              <li>
                <strong>
                  Svetainės saugumo ir veikimo užtikrinimo tikslu:
                </strong>{" "}
                Slapukų ir naršymo duomenys saugomi pagal svetainės slapukų
                nustatymuose nurodytus terminus.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[14px] font-medium">
              6. KOKIAS TEISES JŪS TURITE IR KAIP GALITE JOMIS PASINAUDOTI
            </h2>
            <p>
              Jūs, kaip duomenų subjektas, turite šias teises: žinoti apie savo
              asmens duomenų tvarkymą; prašyti leisti susipažinti su asmens
              duomenimis; reikalauti ištaisyti netikslius duomenis; reikalauti
              apriboti duomenų tvarkymą; reikalauti ištrinti asmens duomenis
              (&bdquo;teisė būti pamirštam&rdquo;); atšaukti duotą sutikimą; nesutikti su
              duomenų tvarkymu; teisę į duomenų perkeliamumą.
            </p>
            <p>
              Norėdami įgyvendinti paminėtas teises, galite kreiptis į UAB
              &bdquo;Padelio daržas&rdquo; šioje politikoje nurodytais kontaktais. Tam, kad
              galėtume tinkamai išnagrinėti Jūsų prašymą, prašytume kreiptis
              pateikiant prašymą raštu ir nurodant, kokią teisę pageidaujate
              įgyvendinti.
            </p>
            <p>
              Ne vėliau kaip per 1 (vieną) mėnesį nuo prašymo gavimo dienos,
              pateiksime Jums informaciją apie tai, kokių veiksmų ėmėmės gavę
              Jūsų prašymą. Jeigu nuspręsime prašymo neįgyvendinti, nedelsdami
              apie tai Jus informuosime, o Jūs tokį sprendimą galėsite skųsti
              Valstybinei duomenų apsaugos inspekcijai (VDAI).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[14px] font-medium">
              7. SLAPUKŲ (COOKIES) NAUDOJIMO POLITIKA
            </h2>
            <p>
              Tinklapyje yra naudojami slapukai. Slapukai – tai tekstiniai
              failai, saugomi Jūsų įrenginyje ir padedantys atpažinti Jus kaip
              lankytoją bei išsaugantys informaciją apie naršymą. Mes naudojame
              būtinuosius slapukus (užtikrinančius svetainės veikimą),
              analitinius ir rinkodaros slapukus (&bdquo;Google Analytics&rdquo;, &bdquo;Meta
              Pixel&rdquo;).
            </p>
            <p>
              Slapukus valdyti galite naudodamiesi mūsų interneto svetainėje
              įdiegtu automatiniu slapukų valdymo įrankiu. Atsidarę svetainę,
              slapukų reklamjuostėje galite sutikti su visais slapukais arba
              pasirinkti norimus nustatymus. Savo sutikimą galite bet kada
              pakeisti ar atšaukti paspaudę svetainės apačioje esančią slapukų
              nustatymų piktogramą.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[14px] font-medium">
              8. PRIVATUMO POLITIKOS PAKEITIMAI
            </h2>
            <p>
              Šią Privatumo politiką galime pakeisti bet kuriuo metu savo
              nuožiūra. Atnaujinta Privatumo politika įsigalioja nuo jos
              paskelbimo interneto svetainėje dienos.
            </p>
          </section>
        </div>
      </main>

      {/* Footer — identical to landing page */}
      <footer
        className="px-6 pb-[52px] pt-16 sm:px-8 md:pb-10 md:pt-0"
        style={{ backgroundColor: DARK_BG }}
      >
        {/* Mobile footer */}
        <div className="md:hidden">
          <div className="mx-auto max-w-[745px]">
            <Image
              src="/logo/logo-white.svg"
              alt="Mainai"
              width={2500}
              height={740}
              className="h-auto w-full"
            />
          </div>

          <div className="mx-auto mt-10 flex max-w-[745px] items-end justify-between gap-8">
            <div
              className="text-[15px] leading-[1.4] sm:text-[17px]"
              style={{
                fontFamily: "var(--font-solar)",
                color: CREAM_WHITE,
              }}
            >
              <p>
                Tel. nr.:
                <br />
                <a
                  href="tel:+37069131019"
                  className="underline underline-offset-2"
                >
                  +37069131019
                </a>
              </p>
              <p className="mt-3">
                Savanorių pr. 178B, Vilnius,
                <br />
                03154 Vilniaus m. sav.
              </p>
            </div>

            <div className="flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/mainai.social/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image
                    src="/icon-instagram.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61586391449827"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Image
                    src="/icon-facebook.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                </a>
              </div>
              <a
                href="/privatumo-politika"
                className="text-[15px] sm:text-[17px]"
                style={{
                  fontFamily: "var(--font-solar)",
                  color: CREAM_WHITE,
                }}
              >
                Privatumo politika
              </a>
            </div>
          </div>
        </div>

        {/* Desktop/tablet footer */}
        <div className="relative hidden items-center justify-between md:flex">
          {/* Left: contact info */}
          <div
            className="flex gap-8 text-[14px] leading-[1.4]"
            style={{
              fontFamily: "var(--font-solar)",
              color: CREAM_WHITE,
            }}
          >
            <p>
              Savanorių pr. 178B, Vilnius,
              <br />
              03154 Vilniaus m. sav.
            </p>
            <p>
              Tel. nr.:
              <br />
              <a
                href="tel:+37069131019"
                className="underline underline-offset-2"
              >
                +37069131019
              </a>
            </p>
          </div>

          {/* Center: logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/logo/logo-white.svg"
              alt="Mainai"
              width={2500}
              height={740}
              className="h-auto w-[154px]"
            />
          </div>

          {/* Right: privacy + socials */}
          <div className="flex items-center gap-6">
            <a
              href="/privatumo-politika"
              className="text-[14px]"
              style={{
                fontFamily: "var(--font-solar)",
                color: CREAM_WHITE,
              }}
            >
              Privatumo politika
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/mainai.social/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/icon-instagram.svg"
                  alt=""
                  width={22}
                  height={22}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586391449827"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image src="/icon-facebook.svg" alt="" width={22} height={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
