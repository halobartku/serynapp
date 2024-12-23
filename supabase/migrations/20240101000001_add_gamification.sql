-- Add player_stats table
CREATE TABLE public.player_stats (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id),
    level INTEGER NOT NULL DEFAULT 1,
    xp INTEGER NOT NULL DEFAULT 0,
    streak_days INTEGER NOT NULL DEFAULT 0,
    last_check_in TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add achievements table
CREATE TABLE public.achievements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    xp_reward INTEGER NOT NULL,
    icon TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add user_achievements table for tracking unlocked achievements
CREATE TABLE public.user_achievements (
    user_id UUID REFERENCES auth.users(id),
    achievement_id UUID REFERENCES public.achievements(id),
    unlocked_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, achievement_id)
);

-- Add daily_quests table
CREATE TABLE public.daily_quests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    xp_reward INTEGER NOT NULL,
    type VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Add user_quests table for tracking daily quest progress
CREATE TABLE public.user_quests (
    user_id UUID REFERENCES auth.users(id),
    quest_id UUID REFERENCES public.daily_quests(id),
    completed_at TIMESTAMP WITH TIME ZONE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    progress INTEGER DEFAULT 0,
    PRIMARY KEY (user_id, quest_id)
);

-- Add RLS policies
ALTER TABLE public.player_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_quests ENABLE ROW LEVEL SECURITY;

-- Policies for player_stats
CREATE POLICY "Users can view their own stats"
    ON public.player_stats FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own stats"
    ON public.player_stats FOR UPDATE
    USING (auth.uid() = user_id);

-- Policies for achievements
CREATE POLICY "Achievements are viewable by all users"
    ON public.achievements FOR SELECT
    USING (true);

-- Policies for user_achievements
CREATE POLICY "Users can view their own achievements"
    ON public.user_achievements FOR SELECT
    USING (auth.uid() = user_id);

-- Policies for user_quests
CREATE POLICY "Users can view their own quests"
    ON public.user_quests FOR SELECT
    USING (auth.uid() = user_id);
