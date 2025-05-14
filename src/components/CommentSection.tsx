
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Star, ThumbsUp } from 'lucide-react';

interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  text: string;
  date: string;
  likes: number;
  isLiked: boolean;
}

// Sample comments data
const initialComments: Comment[] = [
  {
    id: '1',
    user: {
      name: 'Alex Thompson',
      avatar: '',
      verified: true
    },
    text: "This is a fantastic idea! I've been thinking about something similar for healthcare. Would love to collaborate.",
    date: '2 days ago',
    likes: 12,
    isLiked: false
  },
  {
    id: '2',
    user: {
      name: 'Maria Rodriguez',
      avatar: '',
      verified: true
    },
    text: "I've worked in this space before. The market size is actually bigger than estimated. Happy to share insights!",
    date: '1 day ago',
    likes: 8,
    isLiked: false
  }
];

interface CommentSectionProps {
  ideaId?: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ ideaId }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      user: {
        name: 'You',
        avatar: '',
        verified: false
      },
      text: newComment,
      date: 'Just now',
      likes: 0,
      isLiked: false
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };
  
  const handleLike = (id: string) => {
    setComments(comments.map(comment => 
      comment.id === id
        ? { 
            ...comment, 
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked 
          }
        : comment
    ));
  };

  return (
    <div className="py-8 bg-slate-900 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <MessageCircle className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-2xl font-bold text-white">Community Feedback</h2>
          <div className="ml-auto text-sm text-slate-400 flex items-center">
            <span>{comments.length} comments</span>
          </div>
        </div>
        
        {/* Add comment form */}
        <div className="mb-8 bg-slate-800/50 p-4 rounded-lg">
          <Textarea 
            className="min-h-[100px] bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
            placeholder="Share your thoughts or expertise on this idea..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex justify-end mt-3">
            <Button onClick={handleAddComment}>
              Post Comment
            </Button>
          </div>
        </div>
        
        {/* Comments list */}
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-slate-800/30 p-4 rounded-lg">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                  <AvatarFallback className="bg-blue-700 text-white">
                    {comment.user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-semibold text-white">{comment.user.name}</span>
                    {comment.user.verified && (
                      <span className="ml-1 bg-blue-600 text-xs px-1.5 py-0.5 rounded-full text-white flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        Verified
                      </span>
                    )}
                    <span className="ml-auto text-xs text-slate-400">{comment.date}</span>
                  </div>
                  <p className="text-slate-300 mb-3">{comment.text}</p>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center text-xs ${comment.isLiked ? 'text-blue-500' : 'text-slate-400'}`}
                    >
                      <ThumbsUp className="h-3.5 w-3.5 mr-1" />
                      <span>{comment.likes} {comment.likes === 1 ? 'like' : 'likes'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
