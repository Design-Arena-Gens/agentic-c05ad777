import styles from "./page.module.css";

type DialogueBeat = {
  type: "dialogue";
  speaker: string;
  line: string;
  note?: string;
};

type DirectionBeat = {
  type: "direction";
  cue: string;
};

type NarrationBeat = {
  type: "narration";
  text: string;
};

type SceneBeat = DialogueBeat | DirectionBeat | NarrationBeat;

type Scene = {
  title: string;
  focus: string;
  beats: SceneBeat[];
};

const characters = [
  {
    name: "Maya",
    role: "Lead farmhand and narrator. Calm, experienced, and reassuring.",
  },
  {
    name: "Luis",
    role: "Veterinary student assisting Maya. Curious and attentive.",
  },
  {
    name: "Dr. Patel",
    role: "On-call veterinarian who joins during active labor.",
  },
  {
    name: "Daisy",
    role: "The Jersey cow in labor. Her breathing and movement drive tension.",
  },
];

const scenes: Scene[] = [
  {
    title: "Scene 1 – Pre-Dawn Watch",
    focus:
      "Setting the tone in the barn and identifying early signs that Daisy is close to calving.",
    beats: [
      {
        type: "direction",
        cue: "Soft amber lights glow. The barn is quiet except for Daisy chewing cud.",
      },
      {
        type: "narration",
        text: "Maya checks Daisy's tail head and udder while Luis takes notes.",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "See the looseness around her tailhead? That's her body making room for the calf.",
      },
      {
        type: "dialogue",
        speaker: "Luis",
        line: "Her udder looks full and waxy. So we’re officially on baby watch.",
        note: "Adds light humor to ease tension.",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "Exactly. Keep an eye on her breathing; the rhythm tells us how close she is.",
      },
    ],
  },
  {
    title: "Scene 2 – Early Labor",
    focus:
      "Daisy begins experiencing contractions. Maya coaches Luis through monitoring and comfort steps.",
    beats: [
      {
        type: "direction",
        cue: "Rain intensifies outside. Daisy circles inside the pen, occasionally pawing bedding.",
      },
      {
        type: "dialogue",
        speaker: "Luis",
        line: "She keeps lying down and getting back up. Should we reposition her?",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "Let her choose. These mild contractions help the calf settle into place.",
      },
      {
        type: "narration",
        text: "Maya sprays a clean cloth and wipes Daisy's flank and tail.",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "Sanitation first. Any bacteria now makes postpartum recovery harder.",
      },
      {
        type: "dialogue",
        speaker: "Luis",
        line: "Mucus plug just passed. That’s normal, right?",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "Perfectly. Grab the calving kit—we’ll want it staged before she hits the hard push.",
      },
    ],
  },
  {
    title: "Scene 3 – Active Labor",
    focus:
      "Dr. Patel arrives. Daisy is in strong labor; the team monitors the calf’s presentation.",
    beats: [
      {
        type: "direction",
        cue: "Dr. Patel enters with a small flashlight and gloves. Daisy is breathing heavily.",
      },
      {
        type: "dialogue",
        speaker: "Dr. Patel",
        line: "Morning team. Contractions every three minutes?",
      },
      {
        type: "dialogue",
        speaker: "Luis",
        line: "Closer to two now. We’re seeing both hooves, but I can’t make out the snout.",
      },
      {
        type: "dialogue",
        speaker: "Dr. Patel",
        line: "Good sign. Maya, feel for symmetry while I glove up.",
      },
      {
        type: "narration",
        text: "Maya gently palpates, confirming both front hooves are presented and aligned.",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "Front feet are level. Shoulders feel square. We’re green-lit.",
      },
      {
        type: "direction",
        cue: "Daisy groans deeply; contraction peaks.",
      },
      {
        type: "dialogue",
        speaker: "Dr. Patel",
        line: "Luis, measure the interval between pushes. If she stalls past five minutes, we assist.",
      },
    ],
  },
  {
    title: "Scene 4 – Delivery",
    focus:
      "Coordinated teamwork as Daisy delivers the calf; focus on timing and gentle assistance.",
    beats: [
      {
        type: "direction",
        cue: "Steam rises as Daisy exhales. Calf’s hooves emerge, followed by muzzle.",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "There’s the nose! Cloth ready in case we need to clear fluid.",
      },
      {
        type: "dialogue",
        speaker: "Luis",
        line: "Should we pull on the next contraction?",
      },
      {
        type: "dialogue",
        speaker: "Dr. Patel",
        line: "Only if she stalls. Gentle downward pressure, never a yank.",
      },
      {
        type: "direction",
        cue: "A final push. The calf slides free onto fresh straw.",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "New life on the ground! Start the timer—we want Daisy licking within the minute.",
      },
      {
        type: "narration",
        text: "Luis clears membranes from the calf’s nostrils and rubs briskly with a towel.",
      },
      {
        type: "dialogue",
        speaker: "Luis",
        line: "He’s breathing! Strong, steady pulls.",
      },
    ],
  },
  {
    title: "Scene 5 – First Hour",
    focus:
      "Postpartum checks, bonding, and ensuring both cow and calf remain stable in the golden hour.",
    beats: [
      {
        type: "direction",
        cue: "Barn quiets. Soft instrumental music fades in.",
      },
      {
        type: "dialogue",
        speaker: "Dr. Patel",
        line: "Placenta needs to pass within six hours. Note the time, Luis.",
      },
      {
        type: "dialogue",
        speaker: "Luis",
        line: "On it. Calf’s trying to stand—little wobbly but determined.",
      },
      {
        type: "narration",
        text: "Maya dips the calf’s navel in iodine and ensures Daisy has fresh, lukewarm water.",
      },
      {
        type: "dialogue",
        speaker: "Maya",
        line: "First colostrum feed within an hour. That’s his immune shield.",
      },
      {
        type: "dialogue",
        speaker: "Dr. Patel",
        line: "Textbook delivery. Nice work, both of you.",
      },
      {
        type: "dialogue",
        speaker: "Luis",
        line: "Couldn’t ask for a better teacher. Or a tougher cow.",
      },
      {
        type: "direction",
        cue: "Lights fade as Daisy nuzzles her calf. Curtain.",
      },
    ],
  },
];

function isDialogue(beat: SceneBeat): beat is DialogueBeat {
  return beat.type === "dialogue";
}

function isDirection(beat: SceneBeat): beat is DirectionBeat {
  return beat.type === "direction";
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <p className={styles.kicker}>Stage & Screen Ready</p>
          <h1 className={styles.title}>“First Light in the Barn”</h1>
          <p className={styles.subtitle}>
            A dramatic, educational script capturing the rhythm of a cow giving birth,
            blending practical farm protocol with cinematic storytelling.
          </p>
        </header>

        <section className={styles.panel}>
          <h2>Characters</h2>
          <ul className={styles.characterList}>
            {characters.map((character) => (
              <li key={character.name}>
                <span className={styles.characterName}>{character.name}</span>
                <span className={styles.characterRole}>{character.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel}>
          <h2>Setting</h2>
          <p>
            A modest family dairy barn in late winter. Pre-dawn light filters through
            weathered boards while rain patters on the tin roof. Heat lamps cast a
            warm glow over fresh straw as the birth stall—meticulously cleaned—waits
            for the new arrival.
          </p>
        </section>

        <section className={styles.panel}>
          <h2>Scenes</h2>
          <div className={styles.sceneList}>
            {scenes.map((scene) => (
              <article key={scene.title} className={styles.scene}>
                <h3>{scene.title}</h3>
                <p className={styles.sceneFocus}>{scene.focus}</p>
                <ul className={styles.beatList}>
                  {scene.beats.map((beat, index) => {
                    if (isDialogue(beat)) {
                      return (
                        <li key={`${scene.title}-beat-${index}`} className={styles.dialogue}>
                          <span className={styles.speaker}>{beat.speaker}:</span>
                          <span className={styles.line}>{beat.line}</span>
                          {beat.note ? (
                            <span className={styles.note}>({beat.note})</span>
                          ) : null}
                        </li>
                      );
                    }

                    if (isDirection(beat)) {
                      return (
                        <li key={`${scene.title}-beat-${index}`} className={styles.direction}>
                          <span className={styles.directionLabel}>Stage Direction</span>
                          <span>{beat.cue}</span>
                        </li>
                      );
                    }

                    return (
                      <li key={`${scene.title}-beat-${index}`} className={styles.narration}>
                        <span className={styles.narrationLabel}>Action</span>
                        <span>{beat.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.panel}>
          <h2>Production Notes</h2>
          <ul className={styles.notes}>
            <li>
              Sound design should emphasize breath, hoof shuffles, and the calming hum
              of barn equipment to amplify tension and release.
            </li>
            <li>
              Lighting shifts from cool pre-dawn hues to warm golds as the calf arrives,
              mirroring the emotional arc.
            </li>
            <li>
              Encourage actors to maintain grounded, conversational pacing—this is an
              educational moment wrapped in authentic rural life.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
